import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, subtitle, and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /helping grow your faith/i })).toBeInTheDocument()
    expect(screen.getByText(/submit your presence/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /new here/i })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: /live stream/i })).toHaveAttribute('href', '#sermons')
  })
})
