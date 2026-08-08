import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, serif headline, blurb, and CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByText('Award-Winning Design Studio')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Transforming Spaces Into Extraordinary Experiences/)
    expect(screen.getByText(/Forma is a full-service interior design studio/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Book a Consultation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Our Work' })).toBeInTheDocument()
  })
})
