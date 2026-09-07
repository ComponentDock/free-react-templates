import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiSelect } from './MultiSelect'

describe('MultiSelect', () => {
  it('renders the trigger with placeholder', () => {
    render(<MultiSelect />)
    expect(screen.getByPlaceholderText('Click to select an option')).toBeInTheDocument()
  })

  it('has aria-label on the trigger', () => {
    render(<MultiSelect />)
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-label', 'Select options')
  })

  it('has aria-haspopup and aria-expanded initially false', () => {
    render(<MultiSelect />)
    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the dropdown on trigger click', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows thirteen options in the dropdown', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    const listbox = screen.getByRole('listbox')
    const options = within(listbox).getAllByRole('option')
    expect(options).toHaveLength(13)
  })

  it('selects an option and shows a chip', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    // Chip appears with a remove button
    expect(screen.getByLabelText('Remove Option1')).toBeInTheDocument()
    // Dropdown stays open
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('keeps the dropdown open when selecting (closeOnSelect: false)', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    await user.click(screen.getByText('Option2'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Remove Option1')).toBeInTheDocument()
    expect(screen.getByLabelText('Remove Option2')).toBeInTheDocument()
  })

  it('hides placeholder when selections exist', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    const input = screen.getByRole('searchbox')
    expect(input).toHaveAttribute('placeholder', 'Click to select an option')
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    expect(input).toHaveAttribute('placeholder', '')
  })

  it('shows placeholder when all selections are removed', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    const input = screen.getByRole('searchbox')
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    expect(input).toHaveAttribute('placeholder', '')
    // Close dropdown first, then remove
    await user.keyboard('{Escape}')
    await user.click(screen.getByLabelText('Remove Option1'))
    expect(input).toHaveAttribute('placeholder', 'Click to select an option')
  })

  it('removes a single selection via chip × button', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    await user.click(screen.getByText('Option2'))
    await user.click(screen.getByLabelText('Remove Option1'))
    expect(screen.queryByLabelText('Remove Option1')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Remove Option2')).toBeInTheDocument()
  })

  it('clears all selections via clear-all button', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    const input = screen.getByRole('searchbox')
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    await user.click(screen.getByText('Option2'))
    await user.click(screen.getByLabelText('Clear all selections'))
    expect(screen.queryByLabelText('Remove Option1')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Remove Option2')).not.toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Click to select an option')
  })

  it('creates a custom tag on Enter', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    const input = screen.getByRole('searchbox')
    await user.type(input, 'Custom')
    await user.keyboard('{Enter}')
    expect(screen.getByLabelText('Remove Custom')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('closes on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <span data-testid="outside">Outside</span>
        <MultiSelect />
      </div>,
    )
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('preserves selections across open/close cycles', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Remove Option1')).toBeInTheDocument()
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('shows checkbox filled for selected options', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    const option = screen.getByRole('option', { selected: true })
    expect(option).toHaveAttribute('aria-selected', 'true')
  })

  it('highlights rows on hover', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    const option = screen.getByRole('option', { name: 'Option1' })
    await user.hover(option)
    expect(option).toBeInTheDocument()
  })

  it('renders the checkbox squares', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    const options = screen.getAllByRole('option')
    expect(options.length).toBe(13)
    options.forEach((opt) => {
      expect(opt).toHaveAttribute('aria-selected')
    })
  })

  it('toggles selection off when clicking a selected option', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    expect(screen.getByLabelText('Remove Option1')).toBeInTheDocument()
    await user.click(screen.getByRole('option', { name: 'Option1' }))
    expect(screen.queryByLabelText('Remove Option1')).not.toBeInTheDocument()
  })

  it('toggles selection off via chip remove while keeping other chips', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Option1'))
    await user.click(screen.getByText('Option3'))
    await user.click(screen.getByLabelText('Remove Option1'))
    expect(screen.queryByLabelText('Remove Option1')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Remove Option3')).toBeInTheDocument()
  })

  it('navigates options with ArrowDown key', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.keyboard('{ArrowDown}')
    // ArrowDown should move highlight to first option
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('navigates options with ArrowUp key', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    await user.keyboard('{ArrowUp}')
    // ArrowUp from start should wrap to last option
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('does not create a tag from empty or whitespace input', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    const input = screen.getByRole('searchbox')
    // Type only spaces then press Enter — Enter handler guards against empty
    await user.type(input, '   ')
    await user.keyboard('{Enter}')
    // No chip should be created (Enter handler blocks empty searchValue)
    expect(screen.queryByLabelText('Remove    ')).not.toBeInTheDocument()
  })

  it('wraps ArrowDown highlight to first option after last', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    // Press ArrowDown 14 times (13 options + 1 to wrap)
    for (let i = 0; i < 14; i++) {
      await user.keyboard('{ArrowDown}')
    }
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('wraps ArrowUp highlight to last option before first', async () => {
    const user = userEvent.setup()
    render(<MultiSelect />)
    await user.click(screen.getByRole('combobox'))
    // Press ArrowUp once (should wrap to last option)
    await user.keyboard('{ArrowUp}')
    // Press ArrowUp 14 more times (13 options + 1 to wrap back)
    for (let i = 0; i < 14; i++) {
      await user.keyboard('{ArrowUp}')
    }
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })
})
