import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the subheading', () => {
    render(<About />)
    expect(screen.getByText('Since 1905')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<About />)
    expect(screen.getByText('Desire Meets A New Taste')).toBeInTheDocument()
  })

  it('renders the years counter', () => {
    render(<About />)
    expect(screen.getByText('115')).toBeInTheDocument()
    expect(screen.getByText(/Years of Experience In Business/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Our story')).toBeInTheDocument()
  })
})
