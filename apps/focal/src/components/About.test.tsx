import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('We love photography')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<About />)
    expect(screen.getByLabelText('About us')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Photography studio')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders About Us label', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })
})
