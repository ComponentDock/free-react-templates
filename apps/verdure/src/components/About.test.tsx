import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText(/We're Leader In Agricultural Market/i)).toBeInTheDocument()
  })

  it('renders the experience badge', () => {
    render(<About />)
    expect(screen.getByText('25+')).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<About />)
    expect(screen.getByText(/Biography Safe/i)).toBeInTheDocument()
    expect(screen.getByText(/Awards Winning/i)).toBeInTheDocument()
  })

  it('renders about images', () => {
    render(<About />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(2)
  })
})
