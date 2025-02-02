"use client";
import React from 'react';
import { useState } from 'react'

export default function Contacto() {
    const [isComposing, setIsComposing] = useState(false)
  
    const email = "santiagotula1@gmail.com"
    const subject = "Asunto del correo"
    const body = "Cuerpo del correo"
  
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      setIsComposing(true)
  
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      window.open(gmailUrl, '_blank')
  
      // Reset the composing state after a short delay
      setTimeout(() => setIsComposing(false), 1000)
    }
  
    return (
      <button 
        onClick={handleClick}
        disabled={isComposing}
        className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide bg-gray-100 text-blue-400 transition duration-200 rounded shadow-md hover:text-white bg-teal-accent-400 hover:bg-gray-800 focus:shadow-outline focus:outline-none radius-md w-1/2 mx-auto">
          {isComposing ? 'Abriendo Gmail...' : 'Contacto'}
      </button>
    )
  }