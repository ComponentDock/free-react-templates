import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and the quote call to action', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We provide best IT solution/)

    expect(screen.getByText(/data science and artificial intelligence/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Free Quote' })).toBeInTheDocument()
  })
})
