import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the brand eyebrow, headline, appointment CTA, and phone number', () => {
    const { container } = render(<Hero />)

    expect(screen.getByText('Petvet Pet Care')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'The Kind of Care Your Pets Deserve',
    )
    expect(screen.getByRole('link', { name: 'Make An Appointment' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: /11-234-5678-9102/ })).toHaveAttribute(
      'href',
      'tel:+1123456789102',
    )

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/petvet-hero/)
  })
})
