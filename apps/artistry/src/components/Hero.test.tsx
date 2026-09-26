import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the headline with Artistry name', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Hi there, I am Artistry/)
  })

  it('displays the Creative Director subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
  })

  it('displays a portrait image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /portrait/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('artistry-portrait'))
  })

  it('displays a View Works outlined button', () => {
    render(<Hero />)
    const btn = screen.getByRole('link', { name: /View Works/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#works')
  })

  it('renders a dark background section', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-dark-brown')
  })
})
