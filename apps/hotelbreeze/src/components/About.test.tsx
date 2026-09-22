import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<About />)
    expect(screen.getByText('A Place That Feels Like Home')).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Hotelbreeze offers/)).toBeInTheDocument()
    expect(screen.getByText(/Whether you are visiting/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Hotel lobby')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<About className="custom-class" />)
    expect(screen.getByText('About Us').closest('section')).toHaveClass('custom-class')
  })
})
