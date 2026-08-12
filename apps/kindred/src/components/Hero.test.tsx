import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, background image and play button', () => {
    const { container } = render(<Hero />)
    expect(
      screen.getByRole('heading', { name: 'Give A Hand To Make The Better World' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Watch intro video' })).toBeInTheDocument()
    expect(container.querySelector('section')).toHaveAttribute(
      'style',
      expect.stringContaining('kindred-hero/1920/1080'),
    )
  })

  it('renders the blue left-half overlay band', () => {
    const { container } = render(<Hero />)
    const band = container.querySelector('[data-testid="hero-blue-band"]')
    expect(band).not.toBeNull()
    expect(band).toHaveClass('bg-brand/40')
  })
})
