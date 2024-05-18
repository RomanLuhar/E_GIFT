import React from 'react'
import {Header} from './pages/Header'
import {Slider} from './pages/Slider'
import {Banner} from './pages/Banner'
import {NewArrival} from './pages/NewArrival'
import {DealofWeek} from './pages/DealofWeek'
import {BestSellers} from './pages/BestSellers'
import {Services} from './pages/Services'
import {Blog} from './pages/Blog'
import {NewsLetter} from './pages/NewsLetter'
import {Footer} from './pages/Footer'


export const Home = () => {
  return (
	<div>
		
		<Header/>
      <Slider/>
      <Banner/>
      <NewArrival/>
      <DealofWeek/>
      <BestSellers/>
      <Services/>
      <Blog/>
      <NewsLetter/>
      <Footer/>
      
	 		
	</div>
  )
}
