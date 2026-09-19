import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the tagline and heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Fresh Flower & Gift Shop/)).toBeInTheDocument()
    expect(screen.getByText(/Making beautiful flowers/)).toBeInTheDocument()
  })

  it('renders the CTA button linking to shop', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /shop now/i })
    expect(link).toHaveAttribute('href', '#shop')
  })

  it('renders a background image with picsum source', () => {
    render(<Hero />)
    const imgs = document.querySelectorAll('img')
    const heroImg = Array.from(imgs).find((i) => i.getAttribute('src')?.includes('picsum.photos'))
    expect(heroImg).toBeDefined()
    expect(heroImg!.getAttribute('src')).toContain('picsum.photos')
  })
})
