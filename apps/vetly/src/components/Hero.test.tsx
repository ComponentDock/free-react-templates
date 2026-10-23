import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, supporting copy, and Our Services link', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Saving Animals Changing Live/)
    expect(screen.getByText(/far from the countries vokalia/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '#services')
  })
})
