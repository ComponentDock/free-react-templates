import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, blurb, and watch-video button', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/I love to/)

    expect(screen.getByText(/small river named Duden/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Watch Video/i })).toBeInTheDocument()
  })
})
