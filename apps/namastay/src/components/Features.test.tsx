import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature items', () => {
    render(<Features />)
    expect(screen.getByText('Chakra')).toBeInTheDocument()
    expect(screen.getByText('Lotus')).toBeInTheDocument()
    expect(screen.getByText('Yoga')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/balance your energy/i)).toBeInTheDocument()
    expect(screen.getByText(/find inner peace/i)).toBeInTheDocument()
    expect(screen.getByText(/strengthen your body/i)).toBeInTheDocument()
  })
})
