import { render, screen } from '@testing-library/react'
import { Chef } from './Chef'

describe('Chef', () => {
  it('renders section heading', () => {
    render(<Chef />)
    expect(screen.getByText('Master Chef')).toBeInTheDocument()
  })

  it('renders all chef profiles', () => {
    render(<Chef />)
    expect(screen.getByText('Marco Rossi')).toBeInTheDocument()
    expect(screen.getByText('Elena Santos')).toBeInTheDocument()
    expect(screen.getByText('James Chen')).toBeInTheDocument()
  })

  it('renders chef roles', () => {
    render(<Chef />)
    expect(screen.getByText('Head Chef')).toBeInTheDocument()
    expect(screen.getByText('Pastry Chef')).toBeInTheDocument()
    expect(screen.getByText('Sous Chef')).toBeInTheDocument()
  })

  it('renders Meet Our Chef button', () => {
    render(<Chef />)
    expect(screen.getByRole('link', { name: /meet our chef/i })).toBeInTheDocument()
  })
})
