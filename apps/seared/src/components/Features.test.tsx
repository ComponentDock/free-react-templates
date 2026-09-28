import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Quality Cuisine')).toBeInTheDocument()
    expect(screen.getByText('Fresh Food')).toBeInTheDocument()
    expect(screen.getByText('Friendly Staff')).toBeInTheDocument()
    expect(screen.getByText('Easy Reservation')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/master chefs use only the freshest/)).toBeInTheDocument()
    expect(screen.getByText(/source our produce from local farms/)).toBeInTheDocument()
  })

  it('has a section with id features', () => {
    const { container } = render(<Features />)
    expect(container.querySelector('#features')).toBeInTheDocument()
  })
})
