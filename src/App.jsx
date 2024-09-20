import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index"

function App() {


  return (
    <HashRouter>
        <div className="">
            <Routes> <Route path="/" element={<Index />} /></Routes>
          </div>
    </HashRouter>
  )
}

export default App
