require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("E-Commerce Backend Running");
});

// ── REGISTER ──────────────────────────────────────────────────
// POST /api/register
// Body: { first_name, last_name, email, password, phone? }
app.post('/api/register', async (req, res) => {
  const { first_name, last_name, email, password, phone } = req.body;

  // Basic validation
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters.' });
  }

  try {
    const conn = await pool.getConnection();
    try {
      // Check duplicate email
      const [rows] = await conn.query(
        'SELECT id FROM users WHERE email = ?', [email]
      );
      if (rows.length > 0) {
        return res.status(409).json({ message: 'An account with this email already exists.' });
      }

      // Hash password
      const hash = await bcrypt.hash(password, 12);

      // Insert user
      const [result] = await conn.query(
        `INSERT INTO users (first_name, last_name, email, phone, password_hash, created_at)
         VALUES (?, ?, ?, ?, ?, NOW())`,
        [first_name, last_name, email, phone || null, hash]
      );

      const user  = { id: result.insertId, email };
      const token = generateToken(user);

      return res.status(201).json({
        message: 'Account created successfully.',
        token,
        user: { id: user.id, first_name, last_name, email }
      });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// ── LOGIN ─────────────────────────────────────────────────────
// POST /api/login
// Body: { email, password }
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query(
        'SELECT * FROM users WHERE email = ? LIMIT 1', [email]
      );

      if (rows.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }

      const user = rows[0];
      const match = await bcrypt.compare(password, user.password_hash);

      if (!match) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }

      // Update last_login
      await conn.query('UPDATE users SET last_login = NOW() WHERE id = ?', [user.id]);

      const token = generateToken(user);

      return res.status(200).json({
        message: 'Login successful.',
        token,
        user: {
          id:         user.id,
          first_name: user.first_name,
          last_name:  user.last_name,
          email:      user.email,
        }
      });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// ── PROTECTED: GET CURRENT USER ───────────────────────────────
// GET /api/me   (requires Bearer token)
app.get('/api/me', authMiddleware, async (req, res) => {
  try {
    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query(
        'SELECT id, first_name, last_name, email, phone, created_at FROM users WHERE id = ?',
        [req.user.id]
      );
      if (rows.length === 0) return res.status(404).json({ message: 'User not found.' });
      return res.json({ user: rows[0] });
    } finally {
      conn.release();
    }
  } catch (err) {
    console.error('Me error:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
});

// ── SERVE PAGES ───────────────────────────────────────────────
app.get('/login',    (_, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/register', (_, res) => res.sendFile(path.join(__dirname, 'public', 'register.html')));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});