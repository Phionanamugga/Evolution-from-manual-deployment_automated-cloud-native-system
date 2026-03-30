require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Evolution from Manual Deployment to Cloud-Native</h1>
    <p>Stage 1: Basic Node.js + Express Server</p>
    <p>Running on port ${PORT}</p>
  `);
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    message: 'Ready for Docker, Kubernetes, and CI/CD evolution!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server started successfully!`);
  console.log(`   → http://localhost:${PORT}`);
  console.log(`   This is the starting point for manual deployment.`);
});
