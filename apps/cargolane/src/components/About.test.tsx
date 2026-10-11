import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ABOUT_CHECKS } from '../data/content'
import { About } from './About'

describe('About', () => {
  it('renders the orange heading with underline, copy, and green check bullets', () => {
    const { container } = render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' }).className).toContain(
      'text-primary',
    )
    expect(container.querySelector('.w-20')).toBeInTheDocument()
    for (const item of ABOUT_CHECKS) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    const checks = container.querySelectorAll('.text-check')
    expect(checks).toHaveLength(ABOUT_CHECKS.length)
  })

  it('pairs the copy with a placeholder photo that reflows on mobile', () => {
    render(<About />)
    const image = screen.getByRole('img')
    expect(image.getAttribute('src')).toContain('picsum.photos/seed/cargolane-about-')
    expect(image.parentElement?.className).toContain('order-first')
    expect(image.parentElement?.className).toContain('md:order-2')
    expect(screen.getByText(/full-service logistics partner/)).toBeInTheDocument()
    expect(screen.getByText(/network spans ocean, air, and road/)).toBeInTheDocument()
  })
})
