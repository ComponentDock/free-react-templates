import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Building the Future')
  })

  it('renders description', () => {
    render(<Hero />)
    expect(screen.getByText(/Explore the latest/i)).toBeInTheDocument()
  })

  it('renders read more button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders category badge', () => {
    render(<Hero />)
    expect(screen.getByText('technology')).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<Hero />)
    const img = screen.getByRole('presentation')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
