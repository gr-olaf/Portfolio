import React from 'react'
import './skills.css'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

const data = [
	{
		id: 1,
		title: 'HTML',
		level: 4
	},
	{
		id: 2,
		title: 'CSS',
		level: 4
	},
	{
		id: 3,
		title: 'JavaScript',
		level: 4
	},
	{
		id: 4,
		title: 'Tailwind',
		level: 3
	},
	{
		id: 5,
		title: 'React',
		level: 4
	},
	{
		id: 6,
		title: 'Redux',
		level: 3
	},
	{
		id: 7,
		title: "Git",
		level: 3
	},
	{
		id: 8,
		title: 'Unit-test',
		level: 2
	}
]

function setLevel(level) {
	let levelArr = [];
	for (let i = 0; i < level; i++) {
		levelArr.push(<AiFillStar />)
	}
	while (levelArr.length < 5) {
		levelArr.push(<AiOutlineStar />)
	}
	return levelArr
}

const Skills = () => {
	return (
		<section id='skills'>
			<h5 className='text-alternative'>Какими навыками обладаю</h5>
			<h2>Мой опыт</h2>

			<div className="container skills__container">
				{data.map(item => {
					return (
						<div key={item.id} className="skills__item">
							<h3>{item.title}</h3>
							<p>{setLevel(item.level)}</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Skills