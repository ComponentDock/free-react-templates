import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toMatch(/transform your body/i)
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/join the ultimate fitness experience/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Start Training Today')).toBeInTheDocument()
  })

  it('has the hero section landmark', () => {
    render(<Hero />)
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()
  })

  it('renders the play video button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('has the fitness journey label', () => {
    render(<Hero />)
    expect(screen.getByText(/start your fitness journey/i)).toBeInTheDocument()
  })
})
