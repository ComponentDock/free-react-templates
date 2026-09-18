import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading and CTA button', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Far far away, behind the word mountains/)
    expect(heading.textContent).toMatch(/Vokalia and Consonantia/)

    expect(screen.getByRole('link', { name: /let.*s get started/i })).toBeInTheDocument()
  })

  it('has a background image style', () => {
    render(<Hero />)

    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
