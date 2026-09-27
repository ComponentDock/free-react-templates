import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /We Are Digital Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = screen
      .getByRole('heading', { name: /We Are Digital Services/i })
      .closest('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })

  it('links CTA to services section', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /Our Services/i })
    expect(link).toHaveAttribute('href', '#services')
  })
})
