import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('shows the serif heading "Halcyon Spa & Wellness"', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Halcyon Spa & Wellness')
    expect(heading.className).toContain('font-serif')
  })

  it('shows a bold sub-paragraph and a plain paragraph', () => {
    render(<About />)

    expect(screen.getByText(/retreat from the everyday/i)).toBeInTheDocument()
    expect(screen.getByText(/treatments crafted/i)).toBeInTheDocument()
  })

  it('shows circular social icons (twitter, instagram, facebook, linkedin)', () => {
    render(<About />)

    for (const name of ['Twitter', 'Instagram', 'Facebook', 'LinkedIn']) {
      const link = screen.getByRole('link', { name })
      expect(link.className).toContain('rounded-full')
    }
  })

  it('shows two overlapping photos on the right', () => {
    const { container } = render(<About />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('halcyon-about-1'))
    expect(images[1]).toHaveAttribute('src', expect.stringContaining('halcyon-about-2'))
  })
})
