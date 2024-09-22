import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Layout from "./components/layout"
import Index from "./pages/index"
import Me from "./pages/me"
import Skills from "./pages/skills"
import Contact from "./pages/contact"

function App() {


  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        <Layout >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/me" element={<Me />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Layout>
      </AnimatePresence>
    </HashRouter>
  )
}

export default App
