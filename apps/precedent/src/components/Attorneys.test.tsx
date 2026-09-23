import { render, screen } from '@testing-library/react'
import { Attorneys } from './Attorneys'

describe('Attorneys', () => {
  it('renders the section heading', () => {
    render(<Attorneys />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Attorneys')
  })

  it('renders all four attorneys', () => {
    render(<Attorneys />)
    expect(screen.getByText('James Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Sarah Thompson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders titles for each attorney', () => {
    render(<Attorneys />)
    expect(screen.getByText('Senior Attorney')).toBeInTheDocument()
    expect(screen.getByText('Managing Partner')).toBeInTheDocument()
    expect(screen.getByText('Legal Consultant')).toBeInTheDocument()
    expect(screen.getByText('Associate Attorney')).toBeInTheDocument()
  })

  it('renders social links for attorneys', () => {
    render(<Attorneys />)
    expect(screen.getByLabelText('James Mitchell on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Sarah Thompson on Twitter')).toBeInTheDocument()
  })

  it('renders attorney images with alt text', () => {
    render(<Attorneys />)
    expect(screen.getByAltText('James Mitchell, Senior Attorney')).toBeInTheDocument()
  })

  it('has aria-labelledby on section', () => {
    render(<Attorneys />)
    expect(screen.getByRole('region', { name: /attorneys/i })).toBeInTheDocument()
  })
})
