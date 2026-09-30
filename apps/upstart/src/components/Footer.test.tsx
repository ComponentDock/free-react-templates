import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four widget headings', () => {
    render(<Footer />)
    for (const heading of ['About Us', 'Navigation', 'Work', 'Social']) {
      expect(screen.getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }
    expect(screen.getByText(/small design studio/i)).toBeInTheDocument()
  })

  it('lists the navigation and work links', () => {
    render(<Footer />)
    for (const label of ['Home', 'Services', 'About', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    for (const label of ['Dieter Rams', 'kMix Design']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('renders the five social rows with inline brand icons', () => {
    const { container } = render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Youtube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    const icons = container.querySelectorAll('footer svg')
    expect(icons).toHaveLength(5)
  })

  it('shows the copyright line with the Component Dock attribution', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
