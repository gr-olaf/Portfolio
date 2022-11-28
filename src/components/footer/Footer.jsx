import React from 'react'
import './footer.css'
import { SlSocialVkontakte } from 'react-icons/sl'

const data = [
	{
		title: 'В начало',
		link: '#header'
	},
	{
		title: 'О себе',
		link: '#about'
	},
	{
		title: 'Навыки',
		link: '#skills'
	},
	{
		title: 'Портфолио',
		link: '#works'
	},
	{
		title: 'Контакты',
		link: '#contact'
	}
]

const Footer = () => {
	return (
		<footer>
			<a href="#header" className='footer__logo'>Александр</a>

			<ul className='footer__links'>
				{
					data.map(({ title, link }) => {
						return (
							<li><a href={link}>{title}</a></li>
						)
					})
				}
			</ul>

			<div className="footer__socials">
				<a href="https://vk.com/littlebig1" target='_blank' rel='noreferrer'>
					<SlSocialVkontakte />
				</a>
			</div>
		</footer>
	)
}

export default Footer