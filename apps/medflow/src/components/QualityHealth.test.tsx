import { render, screen } from '@testing-library/react'
import QualityHealth from './QualityHealth'

describe('QualityHealth', () => {
  it('renders section heading', () => {
    render(<QualityHealth />)

    expect(screen.getByText('Quality Health')).toBeInTheDocument()
    expect(screen.getByText(/exceptional healthcare services/)).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(<QualityHealth />)

    expect(screen.getByText('Health Consultation')).toBeInTheDocument()
    expect(screen.getByText('Find Health')).toBeInTheDocument()
    expect(screen.getByText('Search Doctor')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<QualityHealth />)

    expect(screen.getByText(/expert medical consultation/)).toBeInTheDocument()
    expect(screen.getByText(/comprehensive health information/)).toBeInTheDocument()
    expect(screen.getByText(/Find the right doctor/)).toBeInTheDocument()
  })

  it('renders feature icons', () => {
    render(<QualityHealth />)

    expect(
      screen.getByText('Health Consultation').closest('div')?.querySelector('svg'),
    ).toBeTruthy()
  })
})
