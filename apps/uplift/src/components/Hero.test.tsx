import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the badge, headline and mission subtext', () => {
    render(<Hero />)

    expect(screen.getByText('Together, We Make a Difference')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Change Lives, One/)
    expect(heading.textContent).toContain('Community')
    expect(heading.textContent).toContain('at a Time')

    expect(
      screen.getByText(/We empower communities through education, healthcare and opportunity/),
    ).toBeInTheDocument()
  })

  it('shows the two call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /Donate Now/ })).toHaveAttribute('href', '#donate')
    expect(screen.getByRole('link', { name: /See Our Impact/ })).toHaveAttribute('href', '#impact')
  })

  it('shows the four impact stats', () => {
    render(<Hero />)

    expect(screen.getByText('50,000+')).toBeInTheDocument()
    expect(screen.getByText('Lives Changed')).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('Communities')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('Countries')).toBeInTheDocument()
    expect(screen.getByText('$10M+')).toBeInTheDocument()
    expect(screen.getByText('Raised')).toBeInTheDocument()
  })

  it('renders a large rounded photo below the stats', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /Smiling children/ })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/uplift-1'))
  })
})
