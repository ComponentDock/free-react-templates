import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText(/We Are Committed To Customer Satisfaction/)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<About />)
    expect(screen.getByText('Read More')).toBeInTheDocument()
  })

  it('renders an image', () => {
    render(<About />)
    const img = screen.getByAltText('Manufacturing facility')
    expect(img).toBeInTheDocument()
  })
})
