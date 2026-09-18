import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Your New Smile/)
  })

  it('renders the uppercase sub-text', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Brightoral')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /book appointment/i })).toHaveAttribute(
      'href',
      '#appointment',
    )
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})
