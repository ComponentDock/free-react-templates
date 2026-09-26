import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Do What You Love')
    expect(screen.getByText(/Crafting beautiful digital experiences/)).toBeInTheDocument()
  })

  it('renders play button with accessible label', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('has a background image style', () => {
    render(<Hero />)
    const section = screen.getByRole('heading', { level: 1 }).closest('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})
