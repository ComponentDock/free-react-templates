import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, supporting copy, and the Load More Item button', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'The Best App in the Universe' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Inappropriate behavior is often laughed off/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Load More Item' })).toBeInTheDocument()
  })
})
