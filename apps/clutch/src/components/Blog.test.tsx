import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Latest News Updates' })).toBeInTheDocument()
    expect(screen.getByText("Benjamin Franklin's Method Of Habit Formation")).toBeInTheDocument()
    expect(screen.getByText('How To Set Intentions That Energize You')).toBeInTheDocument()
    expect(screen.getByText('Burning Desire: Golden Key Or Red Herring')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /View More/i })).toHaveLength(3)
  })
})
