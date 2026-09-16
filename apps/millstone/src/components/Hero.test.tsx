import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Industry/i)
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders the Our Services button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('has a full-width hero section', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section).toBeInTheDocument()
  })
})
