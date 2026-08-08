import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, blurb, and call-to-action', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover the Colorful World/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /Build Your Dream/i })).toBeInTheDocument()
    expect(screen.getByText(/far away, behind the word mountains/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Discover Now/i })).toBeInTheDocument()
  })
})
