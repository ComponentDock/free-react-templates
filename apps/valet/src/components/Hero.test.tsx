import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline, paragraph, and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText(/Save Your Precious Time/i)).toBeInTheDocument()
    expect(screen.getByText(/Focus on what matters/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /request our assistant/i })).toBeInTheDocument()
  })

  it('has a scroll indicator', () => {
    render(<Hero />)
    const bounce = document.querySelector('.animate-bounce')
    expect(bounce).toBeTruthy()
  })
})
