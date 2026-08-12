import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, blurb, and primary CTA', () => {
    render(<Hero />)

    expect(screen.getByText('Hey')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'I AM IRONVAULT' })).toBeInTheDocument()
    expect(screen.getByText(/Certified personal trainer/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Hire me' })).toHaveAttribute('href', '#contact')
  })

  it('renders the trainer portrait and the decorative watermark', () => {
    render(<Hero />)

    const portrait = screen.getByRole('img', { name: /trainer/i })
    expect(portrait).toHaveAttribute('src', expect.stringContaining('ironvault-hero'))
    expect(screen.getByText('trainer')).toHaveAttribute('aria-hidden', 'true')
  })
})
