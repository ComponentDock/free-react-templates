import { render, screen, fireEvent } from '@testing-library/react'
import { BeforeAfter } from './BeforeAfter'

describe('BeforeAfter', () => {
  it('renders section heading', () => {
    render(<BeforeAfter />)
    expect(screen.getByText('Before & After Services')).toBeInTheDocument()
  })

  it('shows first tab description by default', () => {
    render(<BeforeAfter />)
    expect(screen.getByText(/Transform your home exterior/)).toBeInTheDocument()
  })

  it('switches tab on click', () => {
    render(<BeforeAfter />)
    const roofButtons = screen.getAllByText('Roof Cleaning')
    const lastButton = roofButtons[roofButtons.length - 1]
    fireEvent.click(lastButton!)
    expect(screen.getByText(/Restore your roof/)).toBeInTheDocument()
  })

  it('renders all tab buttons', () => {
    render(<BeforeAfter />)
    const tabLabels = [
      'House Washing',
      'Roof Cleaning',
      'Driveway Cleaning',
      'Gutter Cleaning',
      'Patio Cleaning',
      'Building Cleaning',
    ]
    tabLabels.forEach((t) => {
      expect(screen.getAllByText(t).length).toBeGreaterThanOrEqual(1)
    })
  })
})
