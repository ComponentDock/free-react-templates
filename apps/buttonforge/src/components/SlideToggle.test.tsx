import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SlideToggle } from './SlideToggle'

describe('SlideToggle', () => {
  it('renders 2 toggle switches', () => {
    render(<SlideToggle />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes.length).toBe(2)
  })

  it('toggles between ON and OFF states', async () => {
    const user = userEvent.setup()
    render(<SlideToggle />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes[0]!.getAttribute('aria-checked')).toBe('false')
    expect(checkboxes[1]!.getAttribute('aria-checked')).toBe('true')
    await user.click(checkboxes[0]!)
    expect(checkboxes[0]!.getAttribute('aria-checked')).toBe('true')
    await user.click(checkboxes[1]!)
    expect(checkboxes[1]!.getAttribute('aria-checked')).toBe('false')
  })

  it('shows toggle status text', () => {
    render(<SlideToggle />)
    expect(screen.getByText(/toggle is off/i)).toBeInTheDocument()
    expect(screen.getByText(/toggle is on/i)).toBeInTheDocument()
  })
})
