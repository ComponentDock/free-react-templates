import { render, screen } from '@testing-library/react'
import { PickYourStyle } from './PickYourStyle'

describe('PickYourStyle', () => {
  it('renders the section heading', () => {
    render(<PickYourStyle />)
    expect(screen.getByText('Pick Your Style')).toBeInTheDocument()
  })

  it('renders default primary buttons with text', () => {
    render(<PickYourStyle />)
    const buttons = screen.getAllByText('Default Primary')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders default with icon buttons', () => {
    render(<PickYourStyle />)
    const buttons = screen.getAllByText('Default with icon')
    expect(buttons.length).toBe(2)
  })

  it('renders outline primary buttons', () => {
    render(<PickYourStyle />)
    const section = screen.getByTestId('pick-style')
    const outlineButtons = section.querySelectorAll('.btn-matrix-outline-primary')
    expect(outlineButtons.length).toBe(3)
  })
})
