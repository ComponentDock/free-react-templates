import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Our Obsession Is Distinctive Interiors/)
  })

  it('renders the subheading', () => {
    render(<Hero />)

    expect(screen.getByText('Providing All Kinds of Construction Services')).toBeInTheDocument()
  })

  it('has a parallax-style background image', () => {
    render(<Hero />)

    const section = screen.getByLabelText('Hero')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
