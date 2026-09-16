import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Construction')).toBeInTheDocument()
    expect(screen.getByText('House Renovation')).toBeInTheDocument()
    expect(screen.getByText('Painting')).toBeInTheDocument()
    expect(screen.getByText('Architecture Design')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/from foundations to framing/i)).toBeInTheDocument()
    expect(screen.getByText(/transform your living space/i)).toBeInTheDocument()
    expect(screen.getByText(/professional interior and exterior/i)).toBeInTheDocument()
    expect(screen.getByText(/innovative architectural designs/i)).toBeInTheDocument()
  })
})
