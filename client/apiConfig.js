// // apiConfig.js
const isProduction = process.env.NODE_ENV === 'production';

export const API_URL = isProduction
    ? 'https://lucasschuberportfolio-server.vercel.app/' 
    : 'http://localhost:5002/'; 
