import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home.jsx'; // Corrigez le chemin
import Main from './page/Main.jsx';
import Dashboard from './page/Dashboard.jsx';
import DisplayOrders from './page/DisplayOrders.jsx';
import CustomPage from './page/CustomPage.jsx';
import Paid from './page/Paid.jsx';
import Waiting from './page/Waiting.jsx';
import Cook from './page/Cook.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order/" element={<Main />} />
            <Route path="/Dashboard/" element={<Dashboard />} />
            <Route path="/DisplayOrders/" element={<DisplayOrders />} />
            <Route path="/Custom" element={<CustomPage />} />
            <Route path="/Paid" element={<Paid />} />
            <Route path="/Waiting" element={<Waiting />} />
            <Route path="/Cook" element={<Cook />} />
        </Routes>
    );
}

export default App;
