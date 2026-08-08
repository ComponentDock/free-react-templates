import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, blurb, and both call-to-action links', () => {
    render(<Hero />)

    expect(screen.getByText('Specialty Coffee Roasters')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Crafted with Passion/)
    expect(heading.textContent).toMatch(/Passion & Precision/)

    expect(screen.getByText(/From bean to cup/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /View Our Menu/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Order Online/ })).toBeInTheDocument()
  })
})
