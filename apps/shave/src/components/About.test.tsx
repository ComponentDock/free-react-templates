import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Interior beautifies/i })).toBeInTheDocument()
    expect(screen.getByText(/A great barbershop is more than just/i)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText(/Inside the Shave barbershop/i)
    expect(img).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders the See Details link', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /See Details/i })).toBeInTheDocument()
  })
})
