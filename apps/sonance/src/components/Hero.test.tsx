import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the featured episode date', () => {
    render(<Hero />)
    expect(screen.getByText('10 Dec 2019')).toBeInTheDocument()
  })

  it('renders the featured episode heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Ep 05/)
  })

  it('has Subscribe with iTunes CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Subscribe with iTunes' })).toBeInTheDocument()
  })

  it('has Subscribe with RSS CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Subscribe with RSS' })).toBeInTheDocument()
  })

  it('shows a play button for the featured episode', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /play featured episode/i })).toBeInTheDocument()
  })

  it('shows the episode artwork image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /featured episode artwork/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
