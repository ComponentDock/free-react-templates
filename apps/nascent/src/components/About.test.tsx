import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders philosophy heading', () => {
    render(<About />)
    expect(screen.getByText('Our Philosophy')).toBeInTheDocument()
  })

  it('renders two paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/We believe in building/)).toBeInTheDocument()
    expect(screen.getByText(/From early-stage startups/)).toBeInTheDocument()
  })

  it('renders CEO attribution', () => {
    render(<About />)
    expect(screen.getByText('James Carter')).toBeInTheDocument()
    expect(screen.getByText('CEO, Nascent')).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /our philosophy/i })
    expect(img).toBeInTheDocument()
  })
})
