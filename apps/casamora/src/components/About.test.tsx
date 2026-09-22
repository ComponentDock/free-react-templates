import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Welcome/ })).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Casamora offers/)).toBeInTheDocument()
    expect(screen.getByText(/Whether you are visiting/)).toBeInTheDocument()
  })

  it('renders Read More button', () => {
    render(<About />)
    expect(screen.getByText('Read More')).toBeInTheDocument()
  })

  it('renders See video link', () => {
    render(<About />)
    expect(screen.getByText('See video')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Hotel lobby')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<About className="custom-class" />)
    expect(screen.getByRole('heading', { name: /Welcome/ }).closest('section')).toHaveClass(
      'custom-class',
    )
  })
})
