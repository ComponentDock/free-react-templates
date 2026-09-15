import { render, screen } from '@testing-library/react'
import { PopularCountries } from './PopularCountries'

describe('PopularCountries', () => {
  it('renders section heading', () => {
    render(<PopularCountries />)
    expect(screen.getByText('Most Popular Travel Countries')).toBeInTheDocument()
  })

  it('renders Italy description', () => {
    render(<PopularCountries />)
    expect(screen.getByText('Italy, Europe')).toBeInTheDocument()
    expect(screen.getByText('Best Tours City')).toBeInTheDocument()
  })

  it('renders tour images with prices', () => {
    render(<PopularCountries />)
    expect(screen.getByText('Rome - 5 Days')).toBeInTheDocument()
    expect(screen.getByText('Venice - 4 Days')).toBeInTheDocument()
    expect(screen.getByText('$120')).toBeInTheDocument()
  })

  it('renders city list', () => {
    render(<PopularCountries />)
    expect(screen.getByText('Rome')).toBeInTheDocument()
    expect(screen.getByText('Venice')).toBeInTheDocument()
    expect(screen.getByText('Florence')).toBeInTheDocument()
    expect(screen.getByText('Naples')).toBeInTheDocument()
  })

  it('renders View All Places button', () => {
    render(<PopularCountries />)
    expect(screen.getByText('View All Places')).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<PopularCountries />)
    expect(screen.getByLabelText('Popular countries')).toBeInTheDocument()
  })
})
