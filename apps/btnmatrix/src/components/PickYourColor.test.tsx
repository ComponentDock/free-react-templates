import { render, screen } from '@testing-library/react'
import { PickYourColor } from './PickYourColor'

describe('PickYourColor', () => {
  it('renders the section heading', () => {
    render(<PickYourColor />)
    expect(screen.getByText('Pick Your Color')).toBeInTheDocument()
  })

  it('renders all four solid color buttons', () => {
    render(<PickYourColor />)
    expect(screen.getAllByText('Default Primary').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Default Secondary').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Default Tertiary').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Default Quarternary').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all four outline color buttons', () => {
    render(<PickYourColor />)
    const section = screen.getByTestId('pick-color')
    const outlineButtons = section.querySelectorAll(
      '.btn-matrix-outline-primary, .btn-matrix-outline-secondary, .btn-matrix-outline-tertiary, .btn-matrix-outline-quarternary',
    )
    expect(outlineButtons.length).toBe(4)
  })
})
