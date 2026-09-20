import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('A Place Where Every Child Matters')).toBeInTheDocument()
  })

  it('renders the eyebrow', () => {
    render(<About />)
    expect(screen.getByText('About Tadpole')).toBeInTheDocument()
  })

  it('renders the description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/At Tadpole, we believe/)).toBeInTheDocument()
    expect(screen.getByText(/Founded in 2010/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByText('Discover More')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<About />)
    expect(
      screen.getByAltText('Children learning together in a colorful classroom'),
    ).toBeInTheDocument()
  })
})
