import { render, screen } from '@testing-library/react'
import { About } from './About'
import { describe, it, expect } from 'vitest'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About The Book')
  })

  it('renders feature subheadings', () => {
    render(<About />)
    expect(screen.getByText('Award achievements')).toBeInTheDocument()
    expect(screen.getByText('Read On Any Devices')).toBeInTheDocument()
    expect(screen.getByText('Very High Resolution')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('About the book')).toBeInTheDocument()
  })
})
