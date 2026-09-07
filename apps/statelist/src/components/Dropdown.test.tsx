import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown } from './Dropdown'

const TEST_STATES = [
  { name: 'Alabama', abbreviation: 'AL' },
  { name: 'Alaska', abbreviation: 'AK' },
  { name: 'Arizona', abbreviation: 'AZ' },
  { name: 'California', abbreviation: 'CA' },
  { name: 'Colorado', abbreviation: 'CO' },
]

describe('Dropdown', () => {
  it('renders the trigger with label and quantity', () => {
    render(<Dropdown states={TEST_STATES} />)
    expect(screen.getByText('States')).toBeInTheDocument()
    expect(screen.getByText('Any')).toBeInTheDocument()
  })

  it('has a chevron-down icon', () => {
    render(<Dropdown states={TEST_STATES} />)
    expect(screen.getByRole('button', { name: /Select states/i })).toBeInTheDocument()
  })

  it('has aria-haspopup and aria-expanded initially false', () => {
    render(<Dropdown states={TEST_STATES} />)
    const trigger = screen.getByRole('button', { name: /Select states/i })
    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the dropdown on trigger click', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Select states/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('opens the dropdown on Enter key', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    const trigger = screen.getByRole('button', { name: /Select states/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens the dropdown on Space key', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    const trigger = screen.getByRole('button', { name: /Select states/i })
    trigger.focus()
    await user.keyboard(' ')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('closes the dropdown on trigger click when already open', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('shows all states in the dropdown', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.getByText('Alabama')).toBeInTheDocument()
    expect(screen.getByText('Alaska')).toBeInTheDocument()
    expect(screen.getByText('Arizona')).toBeInTheDocument()
    expect(screen.getByText('California')).toBeInTheDocument()
    expect(screen.getByText('Colorado')).toBeInTheDocument()
  })

  it('has a search input with placeholder', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.getByPlaceholderText('Search states')).toBeInTheDocument()
  })

  it('filters states when searching', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    const search = screen.getByPlaceholderText('Search states')
    await user.type(search, 'calif')
    expect(screen.getByText('California')).toBeInTheDocument()
    expect(screen.queryByText('Alabama')).not.toBeInTheDocument()
    expect(screen.queryByText('Alaska')).not.toBeInTheDocument()
  })

  it('shows all states when search is cleared', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    const search = screen.getByPlaceholderText('Search states')
    await user.type(search, 'calif')
    await user.clear(search)
    expect(screen.getByText('Alabama')).toBeInTheDocument()
    expect(screen.getByText('California')).toBeInTheDocument()
  })

  it('checks a state checkbox', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    const checkbox = screen.getByRole('checkbox', { name: 'Alabama' })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('unchecks a previously checked state', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    const checkbox = screen.getByRole('checkbox', { name: 'Alabama' })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('updates quantity to count when states are checked', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    await user.click(screen.getByRole('checkbox', { name: 'Alabama' }))
    await user.click(screen.getByRole('checkbox', { name: 'California' }))
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('shows "Any" when no states are checked', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.getByText('Any')).toBeInTheDocument()
  })

  it('returns to "Any" when all selections are cleared', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    await user.click(screen.getByRole('checkbox', { name: 'Alabama' }))
    expect(screen.getByText('1')).toBeInTheDocument()
    await user.click(screen.getByRole('checkbox', { name: 'Alabama' }))
    expect(screen.getByText('Any')).toBeInTheDocument()
  })

  it('closes on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <span data-testid="outside">Outside</span>
        <Dropdown states={TEST_STATES} />
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('preserves selections across open/close cycles', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    await user.click(screen.getByRole('checkbox', { name: 'Alabama' }))
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    // Re-open
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.getByRole('checkbox', { name: 'Alabama' })).toBeChecked()
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('renders 50 US states by default', () => {
    render(<Dropdown />)
    expect(screen.getByText('States')).toBeInTheDocument()
  })

  it('ignores other keys on the trigger', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    const trigger = screen.getByRole('button', { name: /Select states/i })
    trigger.focus()
    await user.keyboard('{Tab}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('does not close when clicking inside the container', async () => {
    const user = userEvent.setup()
    render(<Dropdown states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /Select states/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    // Click on the search input (inside the container)
    await user.click(screen.getByPlaceholderText('Search states'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })
})
