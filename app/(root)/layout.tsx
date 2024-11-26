import Navbar from '@components/Navbar'
import React from 'react'

export default function layout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <main className='front-work-sans'>
        <Navbar />
        {children}
    </main>
  )
}
