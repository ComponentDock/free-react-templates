import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders heading and content', () => {
    render(<About />)
    expect(screen.getByText(/Thousands of customers trust our company/i)).toBeInTheDocument()
    expect(screen.getByText(/providing reliable financial solutions/i)).toBeInTheDocument()
  })

  it('renders counter badge', () => {
    render(<About />)
    expect(screen.getByText('99')).toBeInTheDocument()
    expect(screen.getByText('Years')).toBeInTheDocument()
  })

  it('renders Learn More button', () => {
    render(<About />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders image', () => {
    render(<About />)
    const img = screen.getByAltText('About Capitex')
    expect(img).toBeInTheDocument()
  })
})
