import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and the call-to-action button', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/One Page/)
    expect(screen.getByText(/single page/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
  })
})
