import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the project title', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('White Sofas')
  })

  it('renders the category tag', () => {
    render(<Hero />)
    expect(screen.getByText('Interior')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders the View Project CTA', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /view project/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#gallery')
  })

  it('has the hero section with correct id', () => {
    render(<Hero />)
    const section = document.getElementById('hero')
    expect(section).toBeInTheDocument()
  })
})
