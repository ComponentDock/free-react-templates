import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and description', () => {
    render(<About />)

    expect(screen.getByText(/What is Lineup and why choose our services/)).toBeInTheDocument()
    expect(screen.getByText(/Vestibulum eget lacus/)).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<About />)

    expect(screen.getByText('Read More')).toBeInTheDocument()
    expect(screen.getByText('Register Now')).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<About />)

    const img = screen.getByAltText('Event showcase')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
