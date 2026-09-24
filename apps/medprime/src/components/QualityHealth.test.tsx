import { render, screen } from '@testing-library/react'
import QualityHealth from './QualityHealth'

describe('QualityHealth', () => {
  it('renders section heading', () => {
    render(<QualityHealth />)

    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByText('Quality Health Services')).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(<QualityHealth />)

    expect(screen.getByText('Quality Services')).toBeInTheDocument()
    expect(screen.getByText('24/7 Emergency')).toBeInTheDocument()
    expect(screen.getByText('Expert Doctors')).toBeInTheDocument()
    expect(screen.getByText('Trusted Care')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<QualityHealth />)

    expect(screen.getByText(/world-class medical services/)).toBeInTheDocument()
    expect(screen.getByText(/Round-the-clock emergency/)).toBeInTheDocument()
    expect(screen.getByText(/board-certified specialists/)).toBeInTheDocument()
    expect(screen.getByText(/Trusted by thousands/)).toBeInTheDocument()
  })

  it('renders feature icons', () => {
    render(<QualityHealth />)

    expect(screen.getByText('Quality Services').closest('div')?.querySelector('svg')).toBeTruthy()
  })
})
