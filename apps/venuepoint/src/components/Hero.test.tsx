import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading text', () => {
    render(<Hero />)
    expect(screen.getByText('An Extraordinary Experience')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('The Venue is')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders a scroll-down indicator', () => {
    const { container } = render(<Hero />)
    const bounce = container.querySelector('.animate-bounce')
    expect(bounce).toBeInTheDocument()
  })
})
