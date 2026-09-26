import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the photographer name', () => {
    render(<Hero />)
    expect(screen.getByText(/Ben Botsford/)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('a Professional Photographer')).toBeInTheDocument()
  })

  it('renders the location', () => {
    render(<Hero />)
    expect(screen.getByText('Live in Oakland')).toBeInTheDocument()
  })

  it('renders photography specialties', () => {
    render(<Hero />)
    expect(screen.getByText(/Nature Photography/)).toBeInTheDocument()
    expect(screen.getByText(/Portrait Photography/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /view my work/i })).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<Hero />)
    expect(screen.getByAltText('Portrait of the photographer')).toBeInTheDocument()
  })
})
