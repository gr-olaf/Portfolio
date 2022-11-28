import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineUser } from 'react-icons/hi'
import { GiSkills } from 'react-icons/gi'
import { HiOutlineDocumentSearch } from 'react-icons/hi'
import { BiMessageSquareDots } from 'react-icons/bi'

const Nav = () => {
	const [activeLink, setActiveLink] = useState('#header');

	return (
		<nav>
			<a href="#header" onClick={() => setActiveLink('#header')} className={activeLink === '#header' ? 'active' : ''}><AiOutlineHome /></a>
			<a href="#about" onClick={() => setActiveLink('#about')} className={activeLink === '#about' ? 'active' : ''}><HiOutlineUser /></a>
			<a href="#skills" onClick={() => setActiveLink('#skills')} className={activeLink === '#skills' ? 'active' : ''}><GiSkills /></a>
			<a href="#works" onClick={() => setActiveLink('#works')} className={activeLink === '#works' ? 'active' : ''}><HiOutlineDocumentSearch /></a>
			<a href="#contact" onClick={() => setActiveLink('#contact')} className={activeLink === '#contact' ? 'active' : ''}><BiMessageSquareDots /></a>
		</nav>
	)
}

export default Nav