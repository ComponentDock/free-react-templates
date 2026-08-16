import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the eyebrow, headline, and Free quote CTA', () => {
    render(<Hero />)
    expect(screen.getByText('The best cleaning service ever')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'We Will Make Absolutely Any Place Clean, Neat',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Free quote' })).toHaveClass('btn-pill')
  })

  it('sits on a cover photo background and shows the side photo', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section#home')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('spotless-hero') })
    const sidePhoto = screen.getByAltText('Cleaner spraying a surface with a bottle')
    expect(sidePhoto).toHaveAttribute('src', expect.stringContaining('spotless-spray'))
  })
})
