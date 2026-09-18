import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from '../components/About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText(/we listen and work together/i)).toBeInTheDocument()
  })

  it('renders the About Us button', () => {
    render(<About />)
    const elements = screen.getAllByText('About Us')
    expect(elements.length).toBeGreaterThanOrEqual(1)
    const button = elements.find((el) => el.tagName === 'A')
    expect(button).toBeInTheDocument()
  })

  it('renders feature list items', () => {
    render(<About />)
    expect(screen.getByText(/fiber-optic speeds/i)).toBeInTheDocument()
    expect(screen.getByText(/no data caps/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 customer support/i)).toBeInTheDocument()
  })

  it('renders the about image with alt text', () => {
    render(<About />)
    expect(screen.getByAltText(/technician installing/i)).toBeInTheDocument()
  })
})
