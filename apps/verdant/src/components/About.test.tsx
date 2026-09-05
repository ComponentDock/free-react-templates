import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading and description', () => {
    render(<About />)
    expect(screen.getByText(/about us/i)).toBeInTheDocument()
    expect(screen.getByText(/we are leading in the plants service fields/i)).toBeInTheDocument()
  })

  it('renders 4 progress bars', () => {
    render(<About />)
    expect(screen.getByText(/office plants/i)).toBeInTheDocument()
    expect(screen.getByText(/field manager/i)).toBeInTheDocument()
    expect(screen.getByText(/landscape design/i)).toBeInTheDocument()
    expect(screen.getByText(/garden care/i)).toBeInTheDocument()
  })

  it('renders 4 benefit cards', () => {
    render(<About />)
    expect(screen.getByText(/quality products/i)).toBeInTheDocument()
    expect(screen.getByText(/perfect service/i)).toBeInTheDocument()
    expect(screen.getByText(/100% natural/i)).toBeInTheDocument()
    expect(screen.getByText(/environmentally friendly/i)).toBeInTheDocument()
  })
})
