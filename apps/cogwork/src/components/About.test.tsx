import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('Create, Enhance and Sustain')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('About our company')).toBeInTheDocument()
  })

  it('renders the read more link', () => {
    render(<About />)
    expect(screen.getByText('Read More')).toBeInTheDocument()
  })
})
