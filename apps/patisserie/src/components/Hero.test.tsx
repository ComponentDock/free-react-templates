import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the display headline and the gold Order Now button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Healthy Made Delicious Cake' }),
    ).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'Order Now' })
    expect(cta).toHaveAttribute('href', '#cakes')
    expect(cta.className).toContain('bg-brand')
    expect(cta.className).toContain('px-[55px]')
    expect(cta.className).toContain('py-[35px]')
  })

  it('uses the cover photo as the section background', () => {
    const { container } = render(<Hero />)
    const banner = container.querySelector('section > div')
    expect(banner?.getAttribute('style')).toContain(hero.image)
  })

  it('darkens the photo with an overlay so white text stays readable', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('.bg-ink\\/60')
    expect(overlay).toHaveClass('absolute', 'inset-0')
  })
})
