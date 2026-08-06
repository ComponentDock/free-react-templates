import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and both call-to-action buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Welcome To Massive App Store/)

    expect(screen.getByRole('link', { name: 'Get App Now' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Discover More' })).toBeInTheDocument()
  })
})
