import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and description', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Lawn care for everyone/)

    expect(screen.getByText(/Professional lawn care and landscaping services/)).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Get a Quote' })).toHaveAttribute('href', '#contact')
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos')
  })
})
