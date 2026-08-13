import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards with title, blurb, and Read More link', () => {
    const { container } = render(<Features />)
    expect(screen.getByRole('heading', { name: 'Chemical Research' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Engineering' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Manufacturing' })).toBeInTheDocument()
    const readMores = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMores).toHaveLength(3)
    expect(container.querySelectorAll('[data-feature-card]')).toHaveLength(3)
  })

  it('renders yellow-outlined Read More links', () => {
    render(<Features />)
    const readMore = screen.getAllByRole('link', { name: 'Read More' })[0]!
    expect(readMore.getAttribute('class')).toContain('border-primary-600')
    expect(readMore.getAttribute('class')).toContain('text-primary-600')
  })

  it('renders a background image for the section', () => {
    const { container } = render(<Features />)
    const section = container.querySelector('[data-features-section]')
    expect(section).not.toBeNull()
    expect(section!.getAttribute('style')).toContain('url(')
  })
})
