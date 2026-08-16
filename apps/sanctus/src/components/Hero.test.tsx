import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the subheading, headline, paragraph, and CTA', () => {
    render(<Hero />)
    expect(screen.getByText(hero.subheading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toBeInTheDocument()
    expect(screen.getByText(hero.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.ctaLabel })).toBeInTheDocument()
  })

  it('shows the rounded image with a circular play icon', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: /sermon/i })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', hero.image)
    expect(screen.getByRole('button', { name: hero.playLabel })).toBeInTheDocument()
  })
})
