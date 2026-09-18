import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Business Consulting')
  })

  it('renders the tagline text', () => {
    render(<Hero />)
    expect(screen.getByText('Best Service')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/The automated process starts/)).toBeInTheDocument()
  })

  it('renders the Explore Services link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: 'Explore Services' })
    expect(link).toHaveAttribute('href', '#services')
  })

  it('renders the play video button', () => {
    render(<Hero />)
    const btn = screen.getByRole('button', { name: 'Play video' })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('type', 'button')
  })

  it('renders the consultant image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: 'Business consultant' })
    expect(img).toBeInTheDocument()
  })
})
