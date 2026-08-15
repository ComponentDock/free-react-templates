import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  heroAlt,
  heroCta,
  heroImage,
  heroTitleLine1,
  heroTitleLine2,
  heroTitleLine3,
} from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the three-line headline', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain(heroTitleLine1)
    expect(heading.textContent).toContain(heroTitleLine2)
    expect(heading.textContent).toContain(heroTitleLine3)
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: heroCta })).toHaveAttribute('href', '#contact-section')
  })

  it('renders the background image', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: heroAlt })
    expect(image).toHaveAttribute('src', heroImage)
  })
})
