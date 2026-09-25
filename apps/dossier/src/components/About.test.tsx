import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Me')
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/passionate product designer/)).toBeInTheDocument()
  })

  it('renders Hire Me and Download CV buttons', () => {
    render(<About />)
    expect(screen.getByText('Hire Me')).toBeInTheDocument()
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<About />)
    const img = screen.getByAltText('Portrait of Alex Morgan')
    expect(img).toBeInTheDocument()
  })
})
