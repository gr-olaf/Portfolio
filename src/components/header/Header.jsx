import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import CTA from './CTA'

const Header = () => {
	return (
		<header id='header'>
			<div className="container header__container">
				<h5 className='text-alternative'>Привет, меня зовут</h5>
				<h1>Александр Зайцев</h1>
				<h5 className='text-alternative'>Frontend-разработчик</h5>

				<CTA />

				<div className='me'>
					<img src={ME} alt="me" />
				</div>
			</div>
		</header>
	)
}

export default Header