import React from 'react'
import Card from '../tools/Card'


export default function Services(props) {

    const data = props.resumeData.services
      
	return (
		<section id="portfolio">
            <h1>Services</h1>
			<Card data={data} />
		</section>
	)
}
