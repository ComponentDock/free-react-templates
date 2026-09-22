import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtitle', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Never.*Limit.*Yourself/s)

    expect(screen.getByText('Go to the gym now!')).toBeInTheDocument()
  })

  it('renders the call-to-action button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })
})
