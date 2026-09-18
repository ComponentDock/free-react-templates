import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Amazing Travel')).toBeInTheDocument()
    expect(screen.getByText('Our Cruises')).toBeInTheDocument()
    expect(screen.getByText('Book Your Trip')).toBeInTheDocument()
    expect(screen.getByText('Nice Support')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Discover breathtaking destinations/)).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<Services />)
    expect(screen.getByLabelText('Services')).toBeInTheDocument()
  })
})
