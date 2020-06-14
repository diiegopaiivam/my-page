import React from 'react';
import Developer from './assets/developer.png';
import Facebook from './assets/facebook.svg';
import Instagram from './assets/instagram.svg';
import Linkedin from './assets/linkedin.svg';
import Github from './assets/github.svg';

function App() {
  return (
    <>        
      <aside>
      </aside>
      <div className="app">
        <div className="description">
          <div className="title">
            <h1>Hello!</h1>
            <h4>I'm Diego Paiva</h4>
          </div>
          <div className="body">
            <p>I'm from Fortaleza, Ceará. Currently i'm studying and working and developing system. I have experiences with modern
              techs and frameworks as ReactJs, NodeJS, Slim, Laravel, Codeigneiter.
            </p>
            <br />
            <p>
              I want much contribute for helped began in profession, but i want to learn with others professionals.
            </p><br></br><br></br>
            <div className="contact">
              <strong>Contact for me</strong>
              <p>Feel free to reach me out on social networks, or you can write to me through diego@devce.com.br</p>
            </div>
          </div>
          <br></br><br></br>
          <footer>
            <div className="redes-sociais">
              <a href="https://www.facebook.com/diego.paiva.965" target="_blank"><img src={Facebook} alt="facebook" /></a>
              <a href="https://www.instagram.com/diiegopaiiva_/" target="_blank"><img src={Instagram} alt="instagram" /></a>
              <a href="https://www.linkedin.com/in/diego-paiva-358030151/" target="_blank"><img src={Linkedin} alt="linkedin" /></a>
              <a href="https://github.com/diiegopaiivam" target="_blank"><img src={Github} alt="github" /></a>
            </div>
          </footer>
        </div>
        <div className="image-background">
          <img src={Developer} alt="Diego Paiva" />
        </div>

      </div>

    </>
  );
}

export default App;
