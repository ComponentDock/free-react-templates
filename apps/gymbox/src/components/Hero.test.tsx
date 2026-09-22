import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and subtitle', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toMatch(/build up your/i)
    expect(heading.textContent).toMatch(/body shape/i)
    expect(screen.getByText(/build your body and fitness/i)).toBeInTheDocument()
  })

  it('renders the Join Us CTA button', () => {
    render(<Hero />)
    const buttons = screen.getAllByText('Join Us')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('has the hero section landmark', () => {
    render(<Hero />)
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()
  })
})
