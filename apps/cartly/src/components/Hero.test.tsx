import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline, subtext and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Show Your/i })).toBeInTheDocument()
    expect(screen.getByText(/Fowl saw dry which a above together place/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /View Collection/i })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<Hero />)
    // The bg image has alt="" (decorative), so it's role=presentation not img
    const img = document.querySelector('img[src*="cartly-hero"]') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('picsum.photos')
  })
})
