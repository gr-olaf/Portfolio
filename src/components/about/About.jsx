import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.jpg'
import { FaUniversity } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { BsFolderCheck } from 'react-icons/bs'

const About = () => {
	return (
		<section id='about'>
			<h5 className='text-alternative'>Немного 0</h5>
			<h2>Себе</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={AboutImg} alt="about-img" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaUniversity />
							<h4>Образование</h4>
							<small>Окончил физмат ЧГУ им. И.Н. Ульянова<br />Направление: Математика</small>
						</article>
						<article className="about__card">
							<AiOutlineCode />
							<h4>Образование в сфере IT</h4>
							<small>Самоучка (~ 1 года)</small>
						</article>
						<article className="about__card">
							<BsFolderCheck />
							<h4>Проекты</h4>
							<small>Несколько Pet-проектов</small>
						</article>
					</div>

					<p>Как я пришел в IT? Это хороший вопрос, в том числе, и для меня. Путешествие в поисках своего "пути" привело меня сюда. До этого я попробовал себя в преподавании "Математики" и "Физики". Но в какой-то момент я понял, что реализовать себя в полной мере я смогу в более продвинутой сфере. И вот, я тут!</p>

					<a href="#contact" className='btn'>Поговорим?</a>
				</div>

			</div>
		</section>
	)
}

export default About