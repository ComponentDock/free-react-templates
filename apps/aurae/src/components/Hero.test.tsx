import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtext', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Get slim and toned/i)
    expect(screen.getByText(/Practice Yoga/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Explore Classes/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /Yoga practice/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
