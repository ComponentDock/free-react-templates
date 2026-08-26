import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Our Services/i)
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Road Transport')).toBeInTheDocument()
    expect(screen.getByText('Sea Cargo')).toBeInTheDocument()
    expect(screen.getByText('Air Freight')).toBeInTheDocument()
    expect(screen.getByText('Warehouse')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Services />)
    const links = screen.getAllByText(/Learn More/)
    expect(links).toHaveLength(4)
  })
})
