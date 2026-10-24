import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the three program blurbs', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Our Mission' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Make Donations' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'We Need Volunteers' })).toBeInTheDocument()
    expect(screen.getByText(/we partner with local leaders/i)).toBeInTheDocument()
    expect(screen.getByText(/every gift is tracked/i)).toBeInTheDocument()
    expect(screen.getByText(/a few hours a month/i)).toBeInTheDocument()
  })

  it('renders a learn-more link per feature', () => {
    render(<Features />)
    const links = screen.getAllByRole('link', { name: 'Learn More' })
    expect(links).toHaveLength(3)
    expect(links[0]).toHaveAttribute('href', '#about')
  })
})
