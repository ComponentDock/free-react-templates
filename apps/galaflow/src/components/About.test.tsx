import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the section title', () => {
    render(<About />)
    expect(screen.getByText('About the Conference')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<About />)
    expect(screen.getByText('Fully Innovative Conference')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Conference venue')).toBeInTheDocument()
  })

  it('renders location info', () => {
    render(<About />)
    expect(screen.getByText(/San Francisco Convention Center/)).toBeInTheDocument()
  })

  it('renders time info', () => {
    render(<About />)
    expect(screen.getByText(/12 Jan – 20 Jan/)).toBeInTheDocument()
  })

  it('has a landmark section', () => {
    render(<About />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})
