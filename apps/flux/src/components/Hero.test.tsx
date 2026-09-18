import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Digital Agency')).toBeInTheDocument()
    expect(screen.getByText('of the year 2024')).toBeInTheDocument()
  })

  it('renders credit and client info', () => {
    render(<Hero />)
    expect(screen.getByText(/Visual Identity by John Doe/)).toBeInTheDocument()
    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument()
  })

  it('renders View Project button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /view project/i })).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<Hero />)
    const bg = document.querySelector('[style*="picsum.photos/seed/flux-hero1"]')
    expect(bg).toBeInTheDocument()
  })
})
