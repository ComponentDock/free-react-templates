import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/My name is Alex/)).toBeInTheDocument()
    expect(screen.getByText(/Digital Product Designer/)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Head of design at Pixelate')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Digital product designer portrait')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
