import { render, screen } from '@testing-library/react'
import { FeatureStrip } from './FeatureStrip'

describe('FeatureStrip', () => {
  it('renders three feature cards', () => {
    render(<FeatureStrip />)
    expect(screen.getByText('Primary Care')).toBeInTheDocument()
    expect(screen.getByText('Emergency Cases')).toBeInTheDocument()
    expect(screen.getByText('Online Appointment')).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<FeatureStrip />)
    expect(screen.getByText(/comprehensive primary care/i)).toBeInTheDocument()
    expect(screen.getByText(/round-the-clock emergency/i)).toBeInTheDocument()
    expect(screen.getByText(/book your appointments online/i)).toBeInTheDocument()
  })
})
