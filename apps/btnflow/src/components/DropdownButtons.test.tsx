import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DropdownButtons } from './DropdownButtons'

describe('DropdownButtons', () => {
  it('renders 8 dropdown buttons', () => {
    render(<DropdownButtons />)
    const buttons = screen.getAllByRole('button', { name: /dropdown button/i })
    expect(buttons.length).toBe(8)
  })

  it('opens a dropdown menu on click', async () => {
    const user = userEvent.setup()
    render(<DropdownButtons />)
    const buttons = screen.getAllByRole('button', { name: /dropdown button/i })
    await user.click(buttons[0]!)
    expect(screen.getByText('Action')).toBeInTheDocument()
    expect(screen.getByText('Another action')).toBeInTheDocument()
    expect(screen.getByText('Something else here')).toBeInTheDocument()
  })

  it('closes the dropdown on second click', async () => {
    const user = userEvent.setup()
    render(<DropdownButtons />)
    const buttons = screen.getAllByRole('button', { name: /dropdown button/i })
    await user.click(buttons[0]!)
    expect(screen.getByText('Action')).toBeInTheDocument()
    await user.click(buttons[0]!)
    expect(screen.queryByText('Action')).not.toBeInTheDocument()
  })
})
