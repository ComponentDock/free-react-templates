import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about me heading', () => {
    render(<About />)
    expect(screen.getByText('about me')).toBeInTheDocument()
  })

  it('renders the experiences heading', () => {
    render(<About />)
    expect(screen.getAllByText('Experiences').length).toBeGreaterThanOrEqual(1)
  })

  it('displays the years of experience counter', () => {
    render(<About />)
    expect(screen.getByText('07')).toBeInTheDocument()
  })

  it('displays "Years of Experiences" text', () => {
    render(<About />)
    expect(screen.getByText(/Years of/)).toBeInTheDocument()
  })

  it('renders all 6 experience entries', () => {
    render(<About />)
    expect(screen.getAllByText(/Product designer/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/UI designer/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Print designer/).length).toBeGreaterThanOrEqual(1)
  })

  it('has a dark navy-deep background', () => {
    const { container } = render(<About />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-navy-deep')
  })

  it('has the about section id', () => {
    const { container } = render(<About />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'about')
  })
})
