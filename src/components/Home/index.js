import React from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <div>
            <div class='container'>
             <div class="container-text">
            <div class="text">
                <h3>Fala!   </h3>
                <h1>Me chamo <span>Hugo Issao Matsumoto</span></h1>
                <p>Pode me chamar de Hugão 😁<br></br></p>
            </div>
            <br></br>
            <Link to="/sobre"><button>Sobre mim</button></Link>
    </div>
    </div>
        </div>
    )
}

export default Home;