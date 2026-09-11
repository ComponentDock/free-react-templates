import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What we Do\?/i })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Marketing & SEO Agency',
      'Startup Agency',
      'Corporate Business',
      'Finance Solution',
      'Food & Restaurant',
      'Travel Agency',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders Learn More links for each service', () => {
    render(<Services />)
    const links = screen.getAllByText(/Learn More/)
    expect(links).toHaveLength(6)
  })

  it('has a white background', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-white')
  })
})
