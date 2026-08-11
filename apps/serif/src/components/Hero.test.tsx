import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import {
  heroAlt,
  heroCategory,
  heroDate,
  heroHeadline,
  heroImageSeed,
  heroSectionLabel,
} from '../data'

describe('Hero', () => {
  it('renders the banner section with the category, headline and date', () => {
    render(<Hero />)

    expect(screen.getByRole('region', { name: heroSectionLabel })).toBeInTheDocument()
    expect(screen.getByText(heroCategory)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroHeadline)
    expect(screen.getByText(heroDate)).toBeInTheDocument()
  })

  it('shows a seeded background photo with a dark overlay', () => {
    const { container } = render(<Hero />)

    const img = container.querySelector('img')
    expect(img).not.toBeNull()
    expect(img).toHaveAttribute('src', expect.stringContaining(heroImageSeed))
    expect(img).toHaveAttribute('alt', heroAlt)
    expect(container.querySelector('.bg-black\\/30')).not.toBeNull()
  })
})
