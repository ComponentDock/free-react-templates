import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the pill label, headline, copy, and call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByText(hero.pill)).toBeInTheDocument()

    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline).toHaveTextContent(hero.headline)

    expect(screen.getByText(hero.subline)).toBeInTheDocument()

    const howWeWork = screen.getByRole('link', { name: hero.primaryCta })
    expect(howWeWork).toHaveAttribute('href', '#about')

    const contactUs = screen.getByRole('link', { name: hero.secondaryCta })
    expect(contactUs).toHaveAttribute('href', '#contact')
  })

  it('renders the illustration with a descriptive alt text', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: hero.imageAlt })
    expect(image).toHaveAttribute('src', hero.image)
  })
})
