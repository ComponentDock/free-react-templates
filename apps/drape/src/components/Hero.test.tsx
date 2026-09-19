import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and eyebrow', () => {
    render(<Hero />)
    expect(screen.getByText('New season')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /New season essentials/ })).toBeInTheDocument()
  })

  it('renders the subtext and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText(/Considered pieces/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop now' })).toHaveAttribute('href', '#shop')
  })

  it('renders the background image', () => {
    render(<Hero />)
    const img = screen.getByAltText('New season collection')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
