import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Portfolio } from './Portfolio'
import { PORTFOLIO_SLIDES } from '../data'

describe('Portfolio', () => {
  it('renders the heading and the first slide', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Portfolio slide 1' })).toBeInTheDocument()
    expect(screen.getByText(PORTFOLIO_SLIDES[0]!.title)).toBeInTheDocument()
  })

  it('advances to the next slide and wraps around', () => {
    render(<Portfolio />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('img', { name: 'Portfolio slide 2' })).toBeInTheDocument()
    for (let i = 0; i < PORTFOLIO_SLIDES.length - 1; i += 1) {
      fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    }
    expect(screen.getByRole('img', { name: 'Portfolio slide 1' })).toBeInTheDocument()
  })

  it('goes to the previous slide and wraps backwards', () => {
    render(<Portfolio />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('img', { name: `Portfolio slide ${PORTFOLIO_SLIDES.length}` }),
    ).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('img', { name: `Portfolio slide ${PORTFOLIO_SLIDES.length - 1}` }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot pagination and marks it current', () => {
    render(<Portfolio />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('img', { name: 'Portfolio slide 3' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })
})
