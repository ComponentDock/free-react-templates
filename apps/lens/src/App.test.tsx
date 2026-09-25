import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Lens — Photography Portfolio Template')

    // Sidebar
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Lens')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome')

    // Photos
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(12)

    // Testimonials
    expect(screen.getByText('Testimonial')).toBeInTheDocument()

    // Biography
    expect(screen.getAllByText('Biography').length).toBeGreaterThanOrEqual(1)

    // Blog
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)

    // Contact form
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
