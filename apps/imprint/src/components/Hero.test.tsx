import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Creative Designer/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Personal Portfolio/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('has the brand name as vertical text', () => {
    render(<Hero />)
    expect(screen.getByText('Imprint')).toBeInTheDocument()
  })
})
