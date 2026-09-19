import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders all 4 column headings', () => {
    render(<Footer />)
    for (const title of ['Engineering', 'Business School', 'Art & Design', 'Higher Education']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders footer links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Computer Engineering' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Business Administration' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Graphic Design' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Applied Studies' })).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Lectio\. All rights reserved/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('does not reference colorlib anywhere', () => {
    const { container } = render(<Footer />)
    const html = container.innerHTML.toLowerCase()
    expect(html).not.toContain('colorlib')
  })
})
