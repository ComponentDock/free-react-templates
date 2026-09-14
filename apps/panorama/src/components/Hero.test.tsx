import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /We Are Panorama/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get in touch/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the background image', () => {
    render(<Hero />)
    const img = document.querySelector('img[src*="picsum.photos"]') as HTMLImageElement
    expect(img).toBeTruthy()
    expect(img.src).toContain('picsum.photos')
  })

  it('renders the scroll-down arrow', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Scroll to about section/i })).toHaveAttribute(
      'href',
      '#about',
    )
  })
})
