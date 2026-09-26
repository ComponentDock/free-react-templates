import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('Clareo')).toBeInTheDocument()
    expect(screen.getByText('Classy Rebel Fashion Photoshoot')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('We Are Clareo a Photography Studio')).toBeInTheDocument()
    expect(screen.getByText('Our Works')).toBeInTheDocument()
    expect(screen.getAllByText('Recent Blog').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
