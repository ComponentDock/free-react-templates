import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Scholar — Online Courses Template')

    // Navbar
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    // Main content
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Hero heading (h1)
    expect(
      screen.getByRole('heading', { level: 1, name: /Learn new skills online/ }),
    ).toBeInTheDocument()

    // Section headings (h2)
    expect(
      screen.getByRole('heading', { level: 2, name: /The world.*largest selection of courses/ }),
    ).toBeInTheDocument()

    // About split heading
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /The world.*largest selection of online courses/,
      }),
    ).toBeInTheDocument()

    // Students viewing
    expect(
      screen.getByRole('heading', { level: 2, name: 'Students are viewing' }),
    ).toBeInTheDocument()

    // Testimonial
    expect(
      screen.getByRole('heading', { level: 2, name: 'Student says about us' }),
    ).toBeInTheDocument()

    // Categories
    expect(
      screen.getByRole('heading', { level: 2, name: 'Explore top categories' }),
    ).toBeInTheDocument()

    // Become Instructor
    expect(
      screen.getByRole('heading', { level: 2, name: 'Become an Instructor' }),
    ).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
