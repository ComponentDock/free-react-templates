import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('My portfolio')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Portfolio />)
    expect(screen.getByText(/Take a look around some of my awesome works/)).toBeInTheDocument()
  })

  it('renders the "More works" button', () => {
    render(<Portfolio />)
    expect(screen.getByText('More works')).toBeInTheDocument()
  })

  it('renders 5 portfolio items', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('each portfolio item has an alt text', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    images.forEach((img, i) => {
      expect(img).toHaveAttribute('alt', `Portfolio project ${i + 1}`)
    })
  })

  it('has a white background', () => {
    const { container } = render(<Portfolio />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-white')
  })

  it('has the portfolio section id', () => {
    const { container } = render(<Portfolio />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'portfolio')
  })
})
