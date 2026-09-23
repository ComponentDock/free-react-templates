import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading and service cards', () => {
    render(<Services />)
    expect(screen.getByText('Offerings to My Clients')).toBeInTheDocument()
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Concept Design')).toBeInTheDocument()
  })

  it('renders descriptions for each service card', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/as low as \$.17 each/)
    expect(descriptions.length).toBe(3)
  })
})
