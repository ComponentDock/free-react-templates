import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the split hero with headline, copy, CTA, photo and video overlay', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Santorini Islandin Greece')
    expect(screen.getByText(/blank cassettes on the web/)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: /Get Started/i })
    expect(cta).toHaveAttribute('href', '#packages')
    expect(cta).toHaveClass('main-btn', 'main-btn-hero')
    expect(
      screen.getByRole('img', { name: 'Coastal village on a Greek island' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5, name: 'Watch Intro Video' })).toBeInTheDocument()
    expect(screen.getByText('You will love our execution')).toBeInTheDocument()
  })

  it('opens and closes the local intro-video popover from the play button', () => {
    render(<Hero />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Play intro video' }))
    const dialog = screen.getByRole('dialog', { name: 'Intro video' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
