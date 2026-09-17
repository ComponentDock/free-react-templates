import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /What We Can Do for You/i })).toBeInTheDocument()
  })

  it('lists all seven services', () => {
    render(<About />)
    const services = [
      'Market Research',
      'Financial Services',
      'Online Marketing',
      '24/7 Support',
      'Business Strategy',
      'Data Analysis',
      'Graphic Design',
    ]
    for (const s of services) {
      expect(screen.getByText(s)).toBeInTheDocument()
    }
  })

  it('displays the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /About BlankSlate/i })).toBeInTheDocument()
  })
})
