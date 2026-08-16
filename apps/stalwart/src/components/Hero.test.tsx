import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, watermark and Discover Work link', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Innovation starts with a dream and a plan/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Construction')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Discover Work/i })).toHaveAttribute(
      'href',
      '#services',
    )
  })

  it('renders the hero photo with the red overlay treatment', () => {
    render(<Hero />)
    const section = document.querySelector('#home')
    expect(section).toHaveStyle({
      backgroundImage: expect.stringContaining('rgba(255,26,53,0.82)'),
    })
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('stalwart-hero') })
  })
})
