import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Images/)
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Manner before lively/)).toBeInTheDocument()
  })

  it('renders the Explore More button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /explore more/i })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Photography hero')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('lenscraft-hero'))
  })
})
