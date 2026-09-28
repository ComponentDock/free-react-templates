import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText('Wide Options of Choice')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Delicious Recipes/ })).toBeInTheDocument()
  })

  it('renders the CTA button linking to dishes', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /Check Our Menu/ })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#dishes')
  })

  it('has a background image via style', () => {
    render(<Hero />)
    const section = document.getElementById('home')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })

  it('has the correct section id', () => {
    render(<Hero />)
    expect(document.getElementById('home')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover a world of flavors/)).toBeInTheDocument()
  })
})
