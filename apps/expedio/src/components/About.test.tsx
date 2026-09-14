import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText(/Exploration is really the essence/)).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<About />)
    expect(screen.getByText(/Make she'd moved divided air/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<About />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Travel exploration')).toBeInTheDocument()
  })
})
