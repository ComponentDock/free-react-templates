import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('What We Can Do for You')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<About />)
    expect(screen.getByText('Providing')).toBeInTheDocument()
  })

  it('lists 4 services', () => {
    render(<About />)
    expect(screen.getByText('Market Research')).toBeInTheDocument()
    expect(screen.getByText('Financial Services')).toBeInTheDocument()
    expect(screen.getByText('Online Marketing')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })
})
