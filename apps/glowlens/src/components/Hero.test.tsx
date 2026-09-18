import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroHeading, heroSubtitle } from '../data'

describe('Hero', () => {
  it('renders the hero heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroHeading)
    expect(screen.getByText(heroSubtitle)).toBeInTheDocument()
  })

  it('has a background image with glowlens-hero seed', () => {
    render(<Hero />)
    const section = screen.getByRole('heading', { level: 1 }).closest('section')!
    expect(section.style.backgroundImage).toContain('glowlens-hero')
  })
})
