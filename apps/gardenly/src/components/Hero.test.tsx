import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { HERO_SLIDES, HERO_CTA } from '../data'

describe('Hero', () => {
  it('renders the headline, subtext, and CTA button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /We provide best gardening service/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Trust The Grounds Guys/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: HERO_CTA.label })).toBeInTheDocument()
  })

  it('renders the first slide photo and a dot per slide', () => {
    render(<Hero />)
    expect(screen.getByAltText('Garden scene 1')).toBeInTheDocument()
    const dots = screen.getAllByRole('button', { name: /Go to slide \d/ })
    expect(dots).toHaveLength(HERO_SLIDES.length)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
  })

  it('switches the visible slide when a dot is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByAltText('Garden scene 2')).toBeInTheDocument()
    expect(screen.queryByAltText('Garden scene 1')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
