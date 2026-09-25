import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Safety First')).toBeInTheDocument()
    expect(screen.getByText('Land Development')).toBeInTheDocument()
    expect(screen.getByText('Resource Extraction')).toBeInTheDocument()
    expect(screen.getByText('Earth Moving')).toBeInTheDocument()
    expect(screen.getByText('Construction')).toBeInTheDocument()
    expect(screen.getByText('Mining Solutions')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Industry-leading safety/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive land clearing/)).toBeInTheDocument()
  })
})
