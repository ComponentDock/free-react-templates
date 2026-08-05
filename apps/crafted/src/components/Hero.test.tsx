import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and both call-to-action buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We Are Crafted/)
    expect(heading.textContent).toMatch(/Design & Development Service Provider/)

    expect(screen.getByRole('link', { name: 'More About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Watch Live Demo/ })).toBeInTheDocument()
  })
})
