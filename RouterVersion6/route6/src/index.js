import React from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from "./App";

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(
    <Router>
        <App/>
    </Router>
)
