import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Learnhub — Online Education Platform')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)

    // Navbar brand
    expect(screen.getAllByText('Learnhub').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    // Features
    expect(screen.getByText('Flexible Learning')).toBeInTheDocument()

    // About
    expect(screen.getByText(/project-based curriculum/i)).toBeInTheDocument()

    // Stats
    expect(screen.getByText('250')).toBeInTheDocument()

    // Courses
    expect(screen.getByText('Featured Courses')).toBeInTheDocument()

    // Platform
    expect(screen.getByText('Learn Anywhere')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Student Success Stories')).toBeInTheDocument()

    // Blog
    expect(screen.getByText('Latest from Our Blog')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
