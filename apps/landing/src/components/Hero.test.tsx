import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, supporting blurb, and a call-to-action button', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Landing pages that convert/)
    expect(screen.getByText(/From idea to launch in minutes/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Landing hero preview/ })).toBeInTheDocument()
  })
})
