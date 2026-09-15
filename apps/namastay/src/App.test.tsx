import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('Namastay')).toBeInTheDocument()

    // Hero
    expect(screen.getByText(/Lose Yourself In Ambience/)).toBeInTheDocument()

    // Features
    expect(screen.getByText('Chakra')).toBeInTheDocument()
    expect(screen.getByText('Lotus')).toBeInTheDocument()
    expect(screen.getByText('Yoga')).toBeInTheDocument()

    // Parallax quote
    expect(screen.getByText(/Do Yoga Today For Better Tomorrow/)).toBeInTheDocument()

    // Yoga classes
    expect(screen.getByText('Yoga Classes')).toBeInTheDocument()
    expect(screen.getByText('Yoga Barre')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Testimonial')).toBeInTheDocument()

    // Stats bar
    expect(screen.getByText('Chat With Us')).toBeInTheDocument()

    // Blog
    expect(screen.getByText('Our Blog')).toBeInTheDocument()

    // Newsletter
    expect(screen.getByRole('heading', { name: /subscribe/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
