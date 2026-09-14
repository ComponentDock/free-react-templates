import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and tagline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Creative Studio/i })).toBeInTheDocument()
    expect(screen.getByText('Model Photography')).toBeInTheDocument()
    expect(screen.getByText('Capturing moments from today')).toBeInTheDocument()
  })

  it('renders the view work CTA link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /View Work/i })
    expect(link).toHaveAttribute('href', '#gallery')
  })
})
