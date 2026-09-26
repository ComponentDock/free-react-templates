import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the greeting subtitle', () => {
    render(<Hero />)
    expect(screen.getByText("Hello! I'm")).toBeInTheDocument()
  })

  it('renders the author name multiple times (watermark, heading, signature)', () => {
    render(<Hero />)
    const names = screen.getAllByText('Louie Smith')
    expect(names.length).toBeGreaterThanOrEqual(2)
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/A Photographer/)).toBeInTheDocument()
    expect(screen.getByText(/I Capture Life/)).toBeInTheDocument()
  })

  it('renders the bio paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/I am a Photographer from America/)).toBeInTheDocument()
  })

  it('renders the photographer portrait image', () => {
    render(<Hero />)
    expect(screen.getByAltText('Photographer portrait')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })
})
