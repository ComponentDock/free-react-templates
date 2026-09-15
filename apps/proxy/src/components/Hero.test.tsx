import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "I'm Your Realtor, Get Your Key",
    )
  })

  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover our world-class properties/)).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download/i })).toBeInTheDocument()
  })

  it('has a background image style', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos')
  })
})
