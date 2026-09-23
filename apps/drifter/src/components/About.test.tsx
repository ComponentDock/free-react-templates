import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and stats', () => {
    render(<About />)
    expect(screen.getByText('About Myself')).toBeInTheDocument()
    expect(screen.getByText('$2.5M')).toBeInTheDocument()
    expect(screen.getByText('1,465')).toBeInTheDocument()
    expect(screen.getByText('3,965')).toBeInTheDocument()
  })

  it('renders all skill bars', () => {
    render(<About />)
    expect(screen.getByText('Tools Expertness')).toBeInTheDocument()
    expect(screen.getByText('After Effects')).toBeInTheDocument()
    expect(screen.getByText('Photoshop')).toBeInTheDocument()
    expect(screen.getByText('Illustrator')).toBeInTheDocument()
    expect(screen.getByText('Figma')).toBeInTheDocument()
    expect(screen.getByText('Sketch')).toBeInTheDocument()
    expect(screen.getByText('Framer')).toBeInTheDocument()
  })

  it('displays skill percentages', () => {
    render(<About />)
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getByText('70%')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()
  })
})
