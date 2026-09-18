import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Marco Sebastián/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /A Corporate Lawyer/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact Me/i })).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Lawyer at office/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('has a video play link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Watch video/i })).toBeInTheDocument()
  })
})
