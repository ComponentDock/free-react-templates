import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText('Go to the gym now!')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /never limit yourself/i })).toBeInTheDocument()
  })

  it('renders a Read More link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /read more/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#about')
  })

  it('renders a hero image with alt text', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /gym interior/i })).toBeInTheDocument()
  })

  it('has a section with id="home"', () => {
    render(<Hero />)
    expect(document.getElementById('home')).toBeInTheDocument()
  })
})
