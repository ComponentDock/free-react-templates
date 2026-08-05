import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading, three project cards, and the View all Works button', () => {
    render(<Portfolio />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Recent Portfolio Showcase' }),
    ).toBeInTheDocument()
    for (const title of [
      'Santorini Island Dream',
      'Proper Guided Tour',
      'Holiday and Fun Package',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'View all Works' })).toBeInTheDocument()
  })
})
