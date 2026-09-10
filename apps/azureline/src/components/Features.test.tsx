import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders feature titles', () => {
    render(<Features />)
    expect(screen.getByText('Responsive View')).toBeInTheDocument()
    expect(screen.getByText('Multiple Layouts')).toBeInTheDocument()
    expect(screen.getByText('Flexible Design')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    const descriptions = screen.getAllByText(/Usage of the Internet/)
    expect(descriptions).toHaveLength(3)
  })
})
