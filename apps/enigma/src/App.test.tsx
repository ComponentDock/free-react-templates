import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Enigma')).toBeInTheDocument()
    expect(screen.getByText(/I'm a freelance/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByText("Let's work together")).toBeInTheDocument()
  })

  it('has Component Dock branding in footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
