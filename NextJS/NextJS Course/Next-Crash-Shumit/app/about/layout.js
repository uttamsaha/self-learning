import Link from 'next/link';
import React from 'react'

const AboutLayout = ({children}) => {
  return (
    <div>
        <nav className='mt-4 mb-6'>
        <nav>
          <ul className="flex gap-x-4">
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vision">Vision</Link></li>
          </ul>
        </nav>
        </nav>
        {children}
    </div>
  )
}

export default AboutLayout;