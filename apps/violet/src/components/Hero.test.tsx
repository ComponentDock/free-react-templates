import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, freebie subheading, and Discover button', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Choose a powerful design for your Start-up/i)

    expect(screen.getByText(/Get your freebie template now!/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Discover/ })).toBeInTheDocument()
  })
})
