import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /don't feel helpless we fight for justice/i }),
    ).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Hero />)
    expect(screen.getByText(/experienced team of attorneys/)).toBeInTheDocument()
  })

  it('renders Contact us CTA button', () => {
    render(<Hero />)
    const contactLink = screen.getByText('Contact us')
    expect(contactLink).toBeInTheDocument()
    expect(contactLink.closest('a')).toHaveAttribute('href', '#contact')
  })

  it('renders Read more CTA button', () => {
    render(<Hero />)
    const readMoreLink = screen.getByText('Read more')
    expect(readMoreLink).toBeInTheDocument()
    expect(readMoreLink.closest('a')).toHaveAttribute('href', '#about')
  })

  it('renders background image', () => {
    const { container } = render(<Hero />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/docket-hero/1920/1080')
  })
})
