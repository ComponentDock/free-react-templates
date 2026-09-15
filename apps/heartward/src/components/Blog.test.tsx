import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest From Our Blog')).toBeInTheDocument()
  })

  it('renders the featured post', () => {
    render(<Blog />)
    expect(screen.getByText('How Your Donations Changed Lives This Quarter')).toBeInTheDocument()
    expect(screen.getByText('Impact Report')).toBeInTheDocument()
  })

  it('renders sidebar posts', () => {
    render(<Blog />)
    expect(screen.getByText('Volunteer Spotlight: Stories from the Field')).toBeInTheDocument()
    expect(
      screen.getByText('New Education Initiative Launches in Southeast Asia'),
    ).toBeInTheDocument()
    expect(screen.getByText('Annual Gala Raises Record Funds for Clean Water')).toBeInTheDocument()
  })

  it('renders post dates and comment counts', () => {
    render(<Blog />)
    expect(screen.getByText('May 10, 2024')).toBeInTheDocument()
    expect(screen.getAllByText('12 Comments')).toHaveLength(1)
    expect(screen.getAllByText('5 Comments')).toHaveLength(1)
  })
})
