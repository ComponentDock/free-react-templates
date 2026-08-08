import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and both call-to-action buttons', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We are Chisel/)
    expect(heading.textContent).toMatch(/we shape buildings/)
    expect(screen.getByRole('link', { name: 'About us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our services' })).toBeInTheDocument()
  })

  it('renders an eyebrow paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Separated they live in/)).toBeInTheDocument()
  })

  it('renders a decorative hero image', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: /modern architecture/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
