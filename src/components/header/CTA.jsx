import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
	return (
		<div className='cta'>
			<a href={CV} download className='btn'>Скачать резюме</a>
			<a href="#contact" className='btn'>Поговорим?</a>
		</div>
	)
}

export default CTA