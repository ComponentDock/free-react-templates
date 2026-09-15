import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ExperienceDonation } from './ExperienceDonation'

describe('ExperienceDonation', () => {
  it('renders heading text', () => {
    render(<ExperienceDonation />)
    expect(screen.getByText(/Experience How Your/)).toBeInTheDocument()
    expect(screen.getByText(/Donation Can Reach/)).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<ExperienceDonation />)
    expect(screen.getByText(/French Revolution/)).toBeInTheDocument()
  })

  it('renders Make Donation Now CTA button', () => {
    render(<ExperienceDonation />)
    const btn = screen.getByText('Make Donation Now')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('a')).toHaveAttribute('href', '#donate')
  })

  it('has dark overlay', () => {
    const { container } = render(<ExperienceDonation />)
    const overlay = container.querySelector('.bg-black\\/42')
    expect(overlay).toBeInTheDocument()
  })
})
