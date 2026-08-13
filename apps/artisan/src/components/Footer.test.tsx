import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, Follow Me heading and social icons', () => {
    const { container } = render(<Footer />)
    expect(screen.getByText('Artisan')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Me' })).toBeInTheDocument()
    for (const name of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(4)
  })

  it('links to Component Dock and shows the copyright bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /component dock/i })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })
})
