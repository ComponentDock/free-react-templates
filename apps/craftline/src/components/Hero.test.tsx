import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Hi!/)).toBeDefined()
    expect(screen.getByText(/I'm Alex/)).toBeDefined()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Download CV')).toBeDefined()
  })

  it('renders slide indicators', () => {
    render(<Hero />)
    const buttons = screen.getAllByRole('button', { name: /go to slide/i })
    expect(buttons).toHaveLength(2)
  })

  it('renders description text', () => {
    render(<Hero />)
    expect(screen.getByText(/passionate designer/)).toBeDefined()
  })
})
