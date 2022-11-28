import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaWhatsapp } from 'react-icons/fa'

const data = [
	{
		id: 1,
		title: 'Email',
		content: 'zalexandr29@gmail.com',
		icon: <HiOutlineMail className='contact__option-icon' />
	},
	{
		id: 2,
		title: 'VK',
		content: 'https://vk.com/littlebig1',
		icon: <SlSocialVkontakte className='contact__option-icon' />
	},
	{
		id: 3,
		title: 'WhatsApp',
		content: '+7 (987) 664-77-07',
		icon: <FaWhatsapp className='contact__option-icon' />
	}
]

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_oirqv25', 'template_ientp68', form.current, 'PscQLwL-DkmI1YhHb')

		e.target.reset();
	}

	return (
		<section id='contact'>
			<h5 className='text-alternative'>Свяжись со мной</h5>
			<h2>Мои контакты</h2>

			<div className="container contact__container">
				<div className="contact__options">
					{
						data.map(({ id, title, content, icon }) => {
							return (
								<article key={id} className="contact__option">
									{icon}
									<h4>{title}</h4>
									<h5>{content}</h5>
								</article>
							)
						})
					}
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name='name' placeholder='Ваше полное имя' required />
					<input type="email" name='email' placeholder='Ваша почта' required />
					<textarea name="message" rows="7" placeholder='Ваше сообщение' required></textarea>
					<button type='submit' className='btn'>Отправить</button>
				</form>
			</div>
		</section>
	)
}

export default Contact