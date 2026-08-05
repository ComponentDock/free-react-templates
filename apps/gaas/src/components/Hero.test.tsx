import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, both action buttons, and the preview image', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Mass People Oriented Software/)

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'watch the video' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Gaas dashboard preview' })).toBeInTheDocument()
  })
})
