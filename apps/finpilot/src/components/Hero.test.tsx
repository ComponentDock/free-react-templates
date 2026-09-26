import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Grow Big with/)).toBeInTheDocument()
    expect(screen.getByText(/FinPilot Business/)).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/Nam libero tempore/)).toBeInTheDocument()
  })

  it('renders Our Services button', () => {
    render(<Hero />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders See How it Works button', () => {
    render(<Hero />)
    expect(screen.getByText('See How it Works')).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = document.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
