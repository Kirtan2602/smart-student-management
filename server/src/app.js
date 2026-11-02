import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Smart Student Management System API is running');
});


app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Backend is working correctly',
    timestamp: new Date().toISOString(),
  });
});

export default app;