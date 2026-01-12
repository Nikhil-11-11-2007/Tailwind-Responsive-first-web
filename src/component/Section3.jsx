import React from 'react'
import Box from './Box'

const Section3 = () => {
    const boxdata = [
        {
            title: '2D Animation',
            name: 'The LighthouseX',
            description: 'Adding a new dimension to projects through thoughtfully designed 2D animations.',
            Image: 'https://astratto-design-agency.vercel.app/assets/single-house-wZnIyyA0.png'
        },
        {
            title: 'Visual Identity',
            name: 'Snowscape Heaven',
            description: 'Crafting a visual identity that mirrors the serenity and allure of a winter sanctuary.',
            Image: 'https://astratto-design-agency.vercel.app/assets/ice-house-DwPmgRBR.png'
        },
        {
            title: 'Motion Graphics',
            name: 'Navigating Possibilities',
            description: 'Motion graphics breathe life into the project, blending direction and creativity.',
            Image: 'https://astratto-design-agency.vercel.app/assets/timer-Das6b0ZN.png'
        },
        {
            title: '3D Animation',
            name: 'Nocturnal Symphony',
            description: 'Through 3D artistry, we orchastrate an animated ode to the evening, a dance of shadows and dreams.',
            Image: 'https://astratto-design-agency.vercel.app/assets/window-19OVqIaP.png'
        },
    ]
  return (
    <div className='w-full'>
      <div className="boxes flex justify-between  flex-wrap">
        {boxdata.map((elem,idx) => {
            return <Box key={idx} elem={elem} index={idx} />
        })}
        
      </div>
    </div>
  )
}

export default Section3
