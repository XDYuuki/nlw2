import React from 'react';

import whatsAppIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
  return(
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars3.githubusercontent.com/u/60723079?s=460&u=f8c18bcc29a685da13d77c100d001e3f625a80e7&v=4"
          alt="Gabriel Rocha"
        />

        <div>
          <strong>Gabriel Rock</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de física avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 70,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp"/>
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;