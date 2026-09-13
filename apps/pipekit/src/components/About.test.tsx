import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading and description', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /Crafting Digital Experiences/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/passionate team of designers/i)).toBeInTheDocument()
  })

  it('renders the years badge and stats', () => {
    render(<About />)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('Years')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: 'Our creative team at work' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders the Learn More button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument()
  })
})
