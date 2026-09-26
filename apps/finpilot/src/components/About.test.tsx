import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('The Largest Business Expert')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/Temporibus autem quibusdam/)).toBeInTheDocument()
  })

  it('renders bullet points', () => {
    render(<About />)
    expect(screen.getByText(/Sed ut perspiciatis/)).toBeInTheDocument()
    expect(screen.getByText(/Nemo enim ipsam/)).toBeInTheDocument()
    expect(screen.getByText(/Ut enim ad minima/)).toBeInTheDocument()
  })

  it('renders About Us button', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('About FinPilot')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
