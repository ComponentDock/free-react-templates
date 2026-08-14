import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the headline, subheading and outline CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toBeInTheDocument()
    expect(screen.getByText(hero.subheading)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveAttribute('href', '#about')
  })

  it('uses the hero background photo with a dark overlay', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveStyle(`background-image: url(${hero.image})`)
    expect(section?.querySelector('.bg-overlay\\/70')).toBeTruthy()
  })
})
