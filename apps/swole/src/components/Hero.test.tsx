import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the tagline, headline, and CTA', () => {
    render(<Hero />)

    expect(screen.getByText('Working hard in order to get perfect shape.')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Swole Fitness Studio')

    const cta = screen.getByRole('link', { name: 'Browse Services' })
    expect(cta).toHaveAttribute('href', '#courses')
  })
})
