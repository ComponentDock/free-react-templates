import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Industrial Solutions!/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/consectetur adipiscing elit/i)).toBeInTheDocument()
  })

  it('renders the Our Services CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('renders a background image', () => {
    render(<Hero />)
    const bgImg = screen.getByRole('img', { name: /industrial/i })
    expect(bgImg).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
