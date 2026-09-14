import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    // TopBar
    expect(screen.getAllByText('info@pressline.dev')[0]).toBeInTheDocument()
    // Navbar
    expect(screen.getAllByText('Pressline')[0]).toBeInTheDocument()
    // Hero
    expect(screen.getByText(/Good books don't give up all their secrets/)).toBeInTheDocument()
    // Categories
    expect(screen.getByText("Children's Books")).toBeInTheDocument()
    // Counter
    expect(screen.getByText('Active Readers')).toBeInTheDocument()
    // About
    expect(screen.getByText('Welcome to Pressline')).toBeInTheDocument()
    // Books
    expect(screen.getByText('Books New Release')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByText('Kind Words From Clients')).toBeInTheDocument()
    // Packages
    expect(screen.getByText('Affordable Packages')).toBeInTheDocument()
    // Contact
    expect(screen.getByText(/Send a Message/)).toBeInTheDocument()
    // Blog
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
