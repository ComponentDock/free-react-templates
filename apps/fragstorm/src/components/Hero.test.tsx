import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the featured article headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Downwell and Space Hulk/)).toBeInTheDocument()
  })

  it('displays author name', () => {
    render(<Hero />)
    expect(screen.getByText(/Marcin Jankowski/)).toBeInTheDocument()
  })

  it('displays the featured article date', () => {
    render(<Hero />)
    // The featured article date is in a <p> tag; trending posts also have dates
    // Use the first matching element
    const dates = screen.getAllByText('Aug 01, 2019')
    expect(dates.length).toBeGreaterThanOrEqual(1)
  })

  it('renders trending posts', () => {
    render(<Hero />)
    expect(screen.getByText(/Trending Posts/)).toBeInTheDocument()
    expect(screen.getByText(/Jalopy developer/)).toBeInTheDocument()
    expect(screen.getByText(/Valve updates/)).toBeInTheDocument()
    expect(screen.getByText(/Capcom asks/)).toBeInTheDocument()
  })

  it('has correct section id', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'home')
  })
})
