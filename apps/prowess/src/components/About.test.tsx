import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the About Prowess heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about prowess/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/we believe fitness is more than just physical/i)).toBeInTheDocument()
  })

  it('renders the Train Hard button link', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: /train hard/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#programs')
  })

  it('renders the about image with alt text', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /personal trainer/i })).toBeInTheDocument()
  })

  it('has a section with id="about"', () => {
    render(<About />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })

  it('renders the Discover subtitle', () => {
    render(<About />)
    expect(screen.getByText('Discover')).toBeInTheDocument()
  })
})
