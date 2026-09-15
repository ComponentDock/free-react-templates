import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and the Discover button', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Do you need/)

    expect(screen.getByRole('link', { name: /Discover/ })).toBeInTheDocument()
  })

  it('shows the background image overlay', () => {
    render(<Hero />)

    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section).toBeInTheDocument()
    expect(section.className).toContain('bg-cover')
  })
})
