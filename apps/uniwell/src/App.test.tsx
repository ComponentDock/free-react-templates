import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Uniwell — E-Learning Template')

    // TopBar
    expect(screen.getByText('Have any questions?')).toBeInTheDocument()

    // Navbar
    expect(screen.getByRole('link', { name: /Uni.*well/ })).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The Premium System Education',
    )

    // Welcome
    expect(screen.getByText('Welcome To Uniwell E-Learning')).toBeInTheDocument()

    // Course categories
    expect(screen.getByText('Course Categories')).toBeInTheDocument()

    // Popular courses
    expect(screen.getByText('Popular Courses')).toBeInTheDocument()

    // Registration banner
    expect(screen.getByText('Register for Free Today')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
