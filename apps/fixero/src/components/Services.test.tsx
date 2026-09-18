import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Renovation')).toBeInTheDocument()
    expect(screen.getByText('Finishing')).toBeInTheDocument()
    expect(screen.getByText('Building Construction')).toBeInTheDocument()
    expect(screen.getByText('House Build')).toBeInTheDocument()
    expect(screen.getByText('Fence Construction')).toBeInTheDocument()
    expect(screen.getByText('Bridge Construct')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Complete home and office renovation/)).toBeInTheDocument()
  })
})
