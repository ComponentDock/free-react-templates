import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Pressure Washing Services')).toBeInTheDocument()
  })

  it('renders all 8 service cards', () => {
    render(<Services />)
    const serviceNames = [
      'House Washing',
      'Roof Cleaning',
      'Driveway Cleaning',
      'Gutter Cleaning',
      'Patio Cleaning',
      'Building Cleaning',
      'Concrete Cleaning',
      'Sidewalk Cleaning',
    ]
    serviceNames.forEach((name) => {
      expect(screen.getAllByText(name).length).toBeGreaterThanOrEqual(1)
    })
  })
})
