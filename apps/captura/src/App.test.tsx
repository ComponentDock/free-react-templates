import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('Captura')).toBeInTheDocument()
    expect(screen.getByText(/professional Photographer/)).toBeInTheDocument()
    expect(screen.getByText('World class photography skills')).toBeInTheDocument()
    expect(screen.getByText('Wildlife photography')).toBeInTheDocument()
    expect(screen.getByText('My world class photography')).toBeInTheDocument()
    expect(screen.getByText('Our Customers Say')).toBeInTheDocument()
    expect(screen.getByText('Milani Mou')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Captura — Photography Portfolio Template')
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
