// // apiConfig.js
const isProduction = process.env.NODE_ENV === 'production';

export const API_URL = isProduction
    ? 'https://lucasschuberportfolio-server.vercel.app/' // Use the serverless function path
    : 'http://localhost:5000/'; // Use your local development endpoint
