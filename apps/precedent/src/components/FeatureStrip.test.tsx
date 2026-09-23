import { render, screen } from '@testing-library/react'
import { FeatureStrip } from './FeatureStrip'

describe('FeatureStrip', () => {
  it('renders all four feature cards', () => {
    render(<FeatureStrip />)
    expect(screen.getByText('Expert Attorneys')).toBeInTheDocument()
    expect(screen.getByText('Case Dismissed')).toBeInTheDocument()
    expect(screen.getByText('Court Performance')).toBeInTheDocument()
    expect(screen.getByText('Client Satisfaction')).toBeInTheDocument()
  })

  it('renders descriptions', () => {
    render(<FeatureStrip />)
    expect(screen.getByText(/decades of combined experience/)).toBeInTheDocument()
    expect(screen.getByText(/proven track record/)).toBeInTheDocument()
    expect(screen.getByText(/brilliantly in court/)).toBeInTheDocument()
    expect(screen.getByText(/best possible outcomes/)).toBeInTheDocument()
  })

  it('has aria-label on section', () => {
    render(<FeatureStrip />)
    expect(screen.getByRole('region', { name: 'Feature strip' })).toBeInTheDocument()
  })

  it('renders four grid items', () => {
    const { container } = render(<FeatureStrip />)
    const items = container.querySelectorAll('section > div > div')
    expect(items).toHaveLength(4)
  })
})
