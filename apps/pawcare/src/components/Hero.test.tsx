import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheading, and outlined CTA', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('We Care Your Pets')

    const cta = screen.getByRole('button', { name: 'Contact Us' })
    expect(cta).toHaveClass('border-brand')
    expect(cta).toHaveClass('text-brand')
  })
})
