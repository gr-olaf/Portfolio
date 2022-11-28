import React from 'react'
import './works.css'
import IMG1 from '../../assets/color-switcher.jpg'
import IMG2 from '../../assets/todo.jpg'
import IMG3 from '../../assets/calculator.jpg'

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Приложение для генерации цветов',
		github: 'https://github.com/gr-olaf/Color-switcher.git'
	},
	{
		id: 2,
		image: IMG2,
		title: 'Todo',
		github: 'https://github.com/gr-olaf/Todo.git'
	},
	{
		id: 3,
		image: IMG3,
		title: 'Калькулятор',
		github: 'https://github.com/gr-olaf/Calculator.git'
	}
]

const Works = () => {
	return (
		<section id='works'>
			<h5 className='text-alternative'>Мои работы</h5>
			<h2>Портфолио</h2>

			<div className="container works__container">
				{
					data.map(({ id, image, title, github }) => {
						return (
							<article key={id} className='works__item'>
								<div className="works__item-image">
									<img src={image} alt={title} />
								</div>
								<h3>{title}</h3>
								<a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
							</article>
						)
					})
				}
			</div>
		</section>
	)
}

export default Works