import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, call to action, and preview image', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Build a better business & faster/)

    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Begin Free Trial' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Favison dashboard preview' })).toBeInTheDocument()
  })
})
