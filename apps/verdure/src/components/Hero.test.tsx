import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtext', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Professional Gardeners & Landscapers/i)).toBeInTheDocument()
  })

  it('renders two CTA links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /What We Do/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Request A Quote/i })).toBeInTheDocument()
  })
})
