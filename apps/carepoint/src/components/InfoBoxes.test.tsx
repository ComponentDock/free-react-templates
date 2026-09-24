import { render, screen } from '@testing-library/react'
import { InfoBoxes } from './InfoBoxes'

describe('InfoBoxes', () => {
  it('renders all three info boxes', () => {
    render(<InfoBoxes />)
    expect(screen.getByText('Working Hours')).toBeInTheDocument()
    expect(screen.getByText('Appointments')).toBeInTheDocument()
    expect(screen.getByText('Emergency Cases')).toBeInTheDocument()
  })

  it('renders descriptions for each box', () => {
    render(<InfoBoxes />)
    expect(screen.getByText(/Monday - Friday/)).toBeInTheDocument()
    expect(screen.getByText(/Book your appointment/)).toBeInTheDocument()
    expect(screen.getByText(/For emergencies/)).toBeInTheDocument()
  })

  it('renders three box cards', () => {
    const { container } = render(<InfoBoxes />)
    const boxes = container.querySelectorAll('.bg-white.rounded-lg')
    expect(boxes).toHaveLength(3)
  })
})
