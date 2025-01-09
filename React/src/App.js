import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
    function handleNameChange() {
        const names=["Earn","Give","spend","Never"]
        const int = Math.floor(Math.random() * 4);
        return names[int];
    }
    // const name = "manivel"
    return (
        <div>
            Subscribe to Dhuddu
            <p>Lets {handleNameChange()} Money </p>
        </div>
    );
}
export default App;