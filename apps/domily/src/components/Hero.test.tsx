import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { HERO } from '../data'

describe('Hero', () => {
  it('renders the caption, headline with gold accent, subtext and outline CTA', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain(HERO.kicker)
    expect(heading.textContent).toContain(HERO.accent)
    expect(heading.textContent).toContain(HERO.end)

    const accent = heading.querySelector('span')
    expect(accent).toHaveClass('text-gold', 'block')

    expect(screen.getByText(HERO.subtext)).toHaveClass('text-[#CCD2E1]')
    const cta = screen.getByRole('link', { name: HERO.cta })
    expect(cta).toHaveAttribute('href', '#properties')
    expect(cta).toHaveClass('border-gold', 'text-gold')
  })

  it('renders the hero photo with the dark overlay', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: HERO.imageAlt })
    expect(image).toHaveAttribute('src', HERO.image)
    expect(image).toHaveClass('object-cover')
  })

  it('renders the vertical gold promo tab with a play button that opens a video dialog', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    expect(screen.getByText(HERO.promo)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Play promo video' }))

    const dialog = screen.getByRole('dialog', { name: 'Promo video' })
    expect(dialog.querySelector('iframe')).toHaveAttribute('title', 'Promo video player')

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog', { name: 'Promo video' })).not.toBeInTheDocument()
  })
})
