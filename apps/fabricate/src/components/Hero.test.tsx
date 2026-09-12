import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("We're Industrial Solution")
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/delivering world-class industrial services/i)).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/don't look further/i)).toBeInTheDocument()
  })
})
