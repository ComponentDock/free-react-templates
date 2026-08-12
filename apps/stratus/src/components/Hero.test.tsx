import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, two paragraphs, and the Read More button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2, name: 'The Best Hosting' })).toBeInTheDocument()
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/)).toHaveLength(1)
    expect(screen.getAllByText(/Sed ultrices interdum libero/)).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveClass('bg-slate')
  })

  it('renders two slider dots with the first one active in brand green', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(2)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]).toHaveClass('bg-brand')
    expect(dots[1]).toHaveAttribute('aria-current', 'false')
  })

  it('switches the active dot when a dot is clicked', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    fireEvent.click(dots[1]!)
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).toHaveClass('bg-brand')
    expect(dots[0]).toHaveAttribute('aria-current', 'false')
  })
})
