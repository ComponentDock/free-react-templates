import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading "All the features you\'d expect"', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/All the features/)
  })

  it('renders 3 feature items', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Tons of pre-made sections' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Complete CMS integration' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Stellar after-sales support' }),
    ).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<About />)
    expect(screen.getByText(/Combine sections from our vast component library/)).toBeInTheDocument()
    expect(screen.getByText(/Easily connect to any content management system/)).toBeInTheDocument()
    expect(screen.getByText(/Our team is here to help you long after/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: 'About Spruce' })
    expect(img).toBeInTheDocument()
  })
})
