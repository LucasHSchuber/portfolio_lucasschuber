// apiConfig.js

const isProduction = process.env.NODE_ENV === 'production';

export const API_URL = isProduction
    ? '/' // Use your production API endpoint
    : 'http://localhost:5000/'; // Use your local development endpoint
