import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subheading and main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Medvista')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We are here for your Care/i })).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Make an appointment/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = screen.getByTestId('hero')
    expect(section.style.backgroundImage).toContain('medvista-hero')
  })

  it('has a dark overlay', () => {
    render(<Hero />)
    const overlay = screen.getByTestId('hero').querySelector('.bg-black\\/60')
    expect(overlay).toBeInTheDocument()
  })
})
