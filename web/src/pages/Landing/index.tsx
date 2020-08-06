import React from 'react';

//Styles
import './styles.css';

// Images
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

//Icons
import studyIcon 				from '../../assets/icons/study.svg';
import giveClassesIcon 	from '../../assets/icons/give-classes.svg';
import purpleHeartIcon 	from '../../assets/icons/purple-heart.svg';


function Landing () {
	return(
		<div id="page-landing">
			<div id="page-landing-content" className="container">

				<div className="logo-container">
					<img src={logoImg} alt="Logo Proffy"/>
					<h2>Sua plataforma de estudos online.</h2>
				</div>

				<img 
							src={landingImg}
							alt="Plataforma de Estudos"
							className="hero-image"
				/>

				<div className="buttons-container">
					<a href="/" className="study" > 
						<img src={studyIcon} alt="Study"/>
						Estudar
					</a>

					<a href="/" className="give-classes" > 
						<img src={giveClassesIcon} alt="Teatch"/>
						Ensinar
					</a>
				</div>

				<span className="total-connections">
					Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="purple-heart"/>
				</span>

			</div>
		</div>
  );
}


export default Landing;