import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_SLIDES } from '../data'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('Hero', () => {
  it('renders the first slide heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[0].heading)
  })

  it('renders the first slide subheading', () => {
    render(<Hero />)
    expect(screen.getByText(HERO_SLIDES[0].subheading)).toBeInTheDocument()
  })

  it('has background image', () => {
    render(<Hero />)
    const section = document.querySelector('section#home')
    expect(section).not.toBeNull()
    expect(section).toHaveStyle({
      backgroundImage: expect.stringContaining('picsum'),
    })
  })

  it('has previous and next navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('displays overlay on hero', () => {
    render(<Hero />)
    const section = document.querySelector('section#home')
    const overlay = section!.children[0]
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
  })

  it('navigates to next slide on Next click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[1].heading)
  })

  it('navigates to previous slide on Previous click (wraps to last)', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    // From slide 0, clicking prev should go to last slide
    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[2].heading)
  })

  it('navigates to slide via indicator button', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const indicator = screen.getByRole('button', { name: /go to slide 3/i })
    await user.click(indicator)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[2].heading)
  })

  it('wraps next from last slide to first', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    // Go to last slide first
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Now at last slide, next should wrap to first
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[0].heading)
  })

  it('navigates backwards from middle slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    // Go to slide 1
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Now at slide 1, prev should go to slide 0
    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[0].heading)
  })
})
