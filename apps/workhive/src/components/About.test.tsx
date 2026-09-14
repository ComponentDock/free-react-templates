import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Premium quality spaces/i })).toBeInTheDocument()
  })

  it('renders About Us label', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders paragraph text', () => {
    render(<About />)
    expect(screen.getByText(/exceptional coworking spaces/)).toBeInTheDocument()
  })

  it('renders Learn More link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about workhive/i })
    expect(img).toBeInTheDocument()
  })
})
