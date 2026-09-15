import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the heading', () => {
    render(<News />)
    expect(screen.getByText(/news & articles/i)).toBeInTheDocument()
  })

  it('renders all three article cards', () => {
    render(<News />)
    expect(screen.getByText('Global Vaccination Efforts Accelerate')).toBeInTheDocument()
    expect(screen.getByText('New Prevention Guidelines Released')).toBeInTheDocument()
    expect(screen.getByText('Community Support Programs Expand')).toBeInTheDocument()
  })

  it('renders article excerpts', () => {
    render(<News />)
    expect(screen.getByText(/ramping up their vaccination/i)).toBeInTheDocument()
    expect(screen.getByText(/updated their guidelines/i)).toBeInTheDocument()
    expect(screen.getByText(/stepping up to provide/i)).toBeInTheDocument()
  })

  it('renders Read more links', () => {
    render(<News />)
    const links = screen.getAllByText('Read more')
    expect(links).toHaveLength(3)
    links.forEach((link) => expect(link).toBeInTheDocument())
  })

  it('renders article images with alt text', () => {
    render(<News />)
    expect(screen.getByAltText('Global Vaccination Efforts Accelerate')).toBeInTheDocument()
    expect(screen.getByAltText('New Prevention Guidelines Released')).toBeInTheDocument()
    expect(screen.getByAltText('Community Support Programs Expand')).toBeInTheDocument()
  })
})
