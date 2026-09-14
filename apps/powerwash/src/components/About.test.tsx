import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
  })

  it('renders all feature items', () => {
    render(<About />)
    expect(screen.getByText('50 Years of Service')).toBeInTheDocument()
    expect(screen.getByText('Professional & Experienced Staff')).toBeInTheDocument()
    expect(screen.getByText('High Quality & Reliable Service')).toBeInTheDocument()
    expect(screen.getByText('Customer Service & Expert Advice')).toBeInTheDocument()
  })
})
