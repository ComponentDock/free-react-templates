import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the serif headline, sub, and decorative ampersand mark', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Your Dream Wedding Begins Here')
    expect(heading).toHaveClass('font-serif')

    expect(screen.getByText('&')).toBeInTheDocument()
    expect(
      screen.getByText(/We craft unforgettable celebrations filled with elegance/),
    ).toBeInTheDocument()
  })

  it('renders both CTAs as rose and outline pills', () => {
    render(<Hero />)

    const primary = screen.getByRole('link', { name: 'Start Planning' })
    expect(primary).toHaveAttribute('href', '#contact')
    expect(primary).toHaveClass('rounded-full', 'bg-primary-600')

    const outline = screen.getByRole('link', { name: 'View Our Work' })
    expect(outline).toHaveAttribute('href', '#portfolio')
    expect(outline).toHaveClass('rounded-full', 'border')
  })

  it('renders the stats row', () => {
    render(<Hero />)

    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Weddings')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Years')).toBeInTheDocument()
    expect(screen.getByText('5-Star')).toBeInTheDocument()
    expect(screen.getByText('Rated')).toBeInTheDocument()
  })

  it('renders the venue photo placeholder', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: 'Beautiful wedding venue' })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/vows-venue'))
  })
})
