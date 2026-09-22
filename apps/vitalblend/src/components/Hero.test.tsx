import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /health is wealth keep it healthy/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/almost before we knew it/i)).toBeInTheDocument()
  })

  it('renders the Take a Service CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Take a Service' })).toBeInTheDocument()
  })

  it('renders the video play icon', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Play video' })).toBeInTheDocument()
  })
})
