import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and description', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /investment in knowledge/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/education is not just about/i)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/award winning university/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('has an aria-label on the section', () => {
    render(<Hero />)
    expect(screen.getByRole('region', { name: 'Hero' })).toBeInTheDocument()
  })
})
