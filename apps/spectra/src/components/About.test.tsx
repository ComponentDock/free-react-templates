import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the Welcome subheading', () => {
    render(<About />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })

  it('renders the About Me heading', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders service cards', () => {
    render(<About />)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Web Application')).toBeInTheDocument()
  })

  it('renders the project counter', () => {
    render(<About />)
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('Finished Projects')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('About me')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('spectra-about'))
  })
})
