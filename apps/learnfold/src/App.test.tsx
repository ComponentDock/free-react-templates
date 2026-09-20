import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getByRole('link', { name: /Learn.*fold/ })).toBeInTheDocument()

    // Hero
    expect(screen.getByText(/Get The Best Free Online Courses/)).toBeInTheDocument()

    // Course Categories
    expect(screen.getByText('Our Course Categories')).toBeInTheDocument()

    // Search
    expect(screen.getByText('Search your course')).toBeInTheDocument()

    // Featured Courses
    expect(screen.getByText('Featured Courses')).toBeInTheDocument()

    // Signup
    expect(screen.getByText(/Sign up to became a teacher/)).toBeInTheDocument()

    // Banner CTA
    expect(screen.getByText('Join Our Community Now!')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
  })
})
