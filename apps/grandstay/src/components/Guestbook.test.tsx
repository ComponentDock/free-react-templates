import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Guestbook } from './Guestbook'
import { TESTIMONIALS } from '../data'
import { describe, expect, it } from 'vitest'

describe('Guestbook', () => {
  const first = TESTIMONIALS[0]!
  const second = TESTIMONIALS[1]!

  it('renders the heading', () => {
    render(<Guestbook />)
    expect(screen.getByRole('heading', { level: 2, name: 'Guestbook' })).toBeInTheDocument()
  })

  it('renders all tab buttons with reviewer names', () => {
    render(<Guestbook />)
    for (const t of TESTIMONIALS) {
      expect(screen.getByRole('button', { name: t.name })).toBeInTheDocument()
    }
  })

  it('shows first testimonial by default', () => {
    render(<Guestbook />)
    expect(screen.getByText(first.title)).toBeInTheDocument()
    expect(screen.getByText(first.date)).toBeInTheDocument()
    expect(screen.getByText(first.text)).toBeInTheDocument()
  })

  it('switches to second testimonial on tab click', async () => {
    const user = userEvent.setup()
    render(<Guestbook />)
    await user.click(screen.getByRole('button', { name: second.name }))
    expect(screen.getByText(second.title)).toBeInTheDocument()
    expect(screen.getByText(second.text)).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Guestbook />)
    const stars = document.querySelectorAll('.fill-brand')
    expect(stars.length).toBeGreaterThanOrEqual(5)
  })

  it('has screen reader only star count', () => {
    render(<Guestbook />)
    expect(screen.getByText(/5 out of 5 stars/)).toBeInTheDocument()
  })
})
