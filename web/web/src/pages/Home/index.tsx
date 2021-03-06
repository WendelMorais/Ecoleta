import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>
                <main>
                    <h1>Seu Marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <a href="/cadastro">
                        <span>
                            i
                        </span>
                    </a>
                </main>
            </div>
        </div>
    )
}

export default Home;