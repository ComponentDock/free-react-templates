import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, it, expect } from 'vitest'

describe('Hero', () => {
  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText(/best seller book of the week/i)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Clue Of The Wooden Cottage',
    )
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('renders the book image', () => {
    render(<Hero />)
    expect(screen.getByAltText('Book illustration')).toBeInTheDocument()
  })
})
