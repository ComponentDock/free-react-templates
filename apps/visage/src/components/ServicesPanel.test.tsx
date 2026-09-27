import { render, screen } from '@testing-library/react'
import { ServicesPanel } from './ServicesPanel'

describe('ServicesPanel', () => {
  it('renders the section heading', () => {
    render(<ServicesPanel />)
    expect(screen.getByText('My Services')).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    render(<ServicesPanel />)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<ServicesPanel />)
    expect(screen.getByText(/visually stunning/)).toBeInTheDocument()
    expect(screen.getByText(/robust, scalable/)).toBeInTheDocument()
    expect(screen.getByText(/cohesive brand/)).toBeInTheDocument()
  })
})
