import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Office Fashion')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByText('New Fashion')).toBeInTheDocument()
  })

  it('renders a description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/we are the best/i)).toBeInTheDocument()
  })

  it('renders a Read More CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })
})
