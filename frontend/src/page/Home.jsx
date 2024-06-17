

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Choice from "../component/Choice.jsx";
import Logo from "../component/Logo.jsx";


const text = [
    "bienvenue sur notre site de commande de nourriture",
    "merci de venir ici",
    "les meilleurs plats sont ici",
]



const Home = () => {
    const randontext = text[Math.floor(Math.random() * text.length)];
    return (
        <div>
            <Logo></Logo>

            <h2 > {randontext} </h2>
            <Choice />


        </div>
    );


}



export default Home;
