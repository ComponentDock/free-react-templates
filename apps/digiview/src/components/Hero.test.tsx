import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading with brand text', () => {
    render(<Hero />)
    expect(screen.getByText(/digital agency/i)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Get in touch/i })).toHaveAttribute('href', '#contact')
  })

  it('renders hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /digital agency workspace/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
