import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/best steaks in town/i)
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /explore menu/i })).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /watch video/i })).toBeInTheDocument()
  })

  it('CTA links to menu section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /explore menu/i })
    expect(cta).toHaveAttribute('href', '#menu')
  })
})
