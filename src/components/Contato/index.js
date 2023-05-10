import React from 'react';
export const Contato = () => {
    return (
        <div>
            <div class='container'>
                <br></br>
                <center><h3>Contate-me!</h3></center>
                <div class="exemplo">
                    <ul class="list">
                        <a href='https://github.com/Hugao21'>
                            <li class="social git">
                                <img src='img/git.png'></img>
                                <span class="title">Hugao21</span>
                            </li>
                        </a>
                        <a href='https://www.linkedin.com/in/hugo-matsumoto-82502b216/'>
                            <li class="social link">
                                <img src='img/linkedin.png'></img>
                                <span class="title">Hugo Matsumoto</span>
                            </li>
                        </a>
                        <li class="social email">
                            <img src='img/email.png'></img>
                            <span class="title">hugo.issao.matsumoto@gmail.com</span>


                        </li>
                        <li class="social zap">
                            <img src='img/zap.png'></img>
                            <span class="title">(+55)11 96406-4544</span>


                        </li>
                    </ul>
                </div>
                <br></br>

            </div>
        </div>


    )
}

export default Contato;