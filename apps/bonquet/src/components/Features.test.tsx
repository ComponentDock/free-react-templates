import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2, name: /best way to eat/i })).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 3, name: 'Healthy Meal' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Fast Food' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Delicious Coffee' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    const descriptions = screen.getAllByText(/making a reservation at bonquet/i)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })
})
