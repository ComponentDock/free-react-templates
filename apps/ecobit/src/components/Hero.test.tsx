import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, call to action, and app preview image', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Building Networks For People/)

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /try for free/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Ecobit app dashboard preview' })).toBeInTheDocument()
  })
})
