import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Discover Your/)
    expect(screen.getByRole('link', { name: /View Properties/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const bg = document.querySelector('[style*="picsum"]')
    expect(bg).toBeInTheDocument()
  })
})
