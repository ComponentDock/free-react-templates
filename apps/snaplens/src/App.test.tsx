import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    // Navbar logo
    expect(screen.getByText('SNAPLENS')).toBeInTheDocument()
    // Hero title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Snaplens')
    // Intro
    expect(screen.getByText('We Are So Creative')).toBeInTheDocument()
    // Milestones
    expect(screen.getByText('48')).toBeInTheDocument()
    // Services
    expect(screen.getByText('See What We Offer')).toBeInTheDocument()
    // Contact
    expect(screen.getByText('Stay in Touch')).toBeInTheDocument()
    // Footer
    expect(screen.getByText("Let's Work Together!")).toBeInTheDocument()
  })
})
