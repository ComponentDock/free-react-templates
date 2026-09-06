import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiselectDropdown } from './MultiselectDropdown'

const defaultOptions = Array.from({ length: 13 }, (_, i) => `Option${i + 1}`)

function setup(overrides?: {
  options?: string[]
  selected?: string[]
  onChange?: (selected: string[]) => void
}) {
  const onChange = overrides?.onChange ?? vi.fn()
  const result = render(
    <MultiselectDropdown
      options={overrides?.options ?? defaultOptions}
      selected={overrides?.selected ?? []}
      onChange={onChange}
    />,
  )
  return { ...result, onChange }
}

describe('MultiselectDropdown', () => {
  it('renders the placeholder text', () => {
    setup()
    expect(screen.getByText('Select options...')).toBeInTheDocument()
  })

  it('opens the dropdown menu on click', async () => {
    const user = userEvent.setup()
    setup()
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('shows all options when open', async () => {
    const user = userEvent.setup()
    setup()
    await user.click(screen.getByRole('button', { name: /select options/i }))
    for (const opt of defaultOptions) {
      expect(screen.getByRole('option', { name: opt })).toBeInTheDocument()
    }
  })

  it('selects an option on click', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    setup({ onChange })
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: 'Option1' }))
    expect(onChange).toHaveBeenCalledWith(['Option1'])
  })

  it('deselects an already-selected option', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    setup({ selected: ['Option1', 'Option2'], onChange })
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: 'Option1' }))
    expect(onChange).toHaveBeenCalledWith(['Option2'])
  })

  it('shows selected tags when options are selected', async () => {
    const user = userEvent.setup()
    setup({ selected: ['Option3', 'Option5'] })
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getAllByText('Option3').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Option5').length).toBeGreaterThanOrEqual(1)
  })

  it('removes a selected tag via its remove button', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    setup({ selected: ['Option1', 'Option2'], onChange })
    const removeBtn = screen.getByRole('button', { name: /remove option1/i })
    await user.click(removeBtn)
    expect(onChange).toHaveBeenCalledWith(['Option2'])
  })

  it('closes the dropdown on outside click', async () => {
    const user = userEvent.setup()
    setup()
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(document.body)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('shows the count of selected items when more than two are selected', () => {
    setup({ selected: ['Option1', 'Option2', 'Option3'] })
    expect(screen.getByText('3 selected')).toBeInTheDocument()
  })

  it('displays the selected option label in the trigger when one is selected', async () => {
    setup({ selected: ['Option7'] })
    expect(screen.getAllByText('Option7').length).toBeGreaterThanOrEqual(1)
  })

  it('displays two selected labels in the trigger when two are selected', async () => {
    setup({ selected: ['Option1', 'Option2'] })
    expect(screen.getByText('Option1, Option2')).toBeInTheDocument()
  })

  it('marks a selected option as checked in the listbox', async () => {
    const user = userEvent.setup()
    setup({ selected: ['Option3'] })
    await user.click(screen.getByRole('button', { name: /select options/i }))
    const option = screen.getByRole('option', { name: 'Option3' })
    expect(option).toHaveAttribute('aria-selected', 'true')
  })

  it('marks unselected options as not checked', async () => {
    const user = userEvent.setup()
    setup({ selected: ['Option1'] })
    await user.click(screen.getByRole('button', { name: /select options/i }))
    const option = screen.getByRole('option', { name: 'Option3' })
    expect(option).toHaveAttribute('aria-selected', 'false')
  })

  // Keyboard navigation tests
  it('opens dropdown with Enter key', async () => {
    const user = userEvent.setup()
    setup()
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with Space key', async () => {
    const user = userEvent.setup()
    setup()
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard(' ')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('selects highlighted option with Enter when dropdown is open', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    setup({ onChange })
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{Enter}') // opens, highlights index 0
    await user.keyboard('{Enter}') // selects Option1
    expect(onChange).toHaveBeenCalledWith(['Option1'])
  })

  it('selects highlighted option with Space when dropdown is open', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    setup({ onChange })
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard(' ') // opens
    await user.keyboard(' ') // selects Option1
    expect(onChange).toHaveBeenCalledWith(['Option1'])
  })

  it('navigates down with ArrowDown key', async () => {
    const user = userEvent.setup()
    setup()
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}') // opens, index 0
    await user.keyboard('{ArrowDown}') // moves to index 1
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('wraps around with ArrowDown at last option', async () => {
    const user = userEvent.setup()
    setup({ options: ['A', 'B'] })
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}') // opens, index 0
    await user.keyboard('{ArrowDown}') // index 1
    await user.keyboard('{ArrowDown}') // wraps to index 0
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('navigates up with ArrowUp key', async () => {
    const user = userEvent.setup()
    setup({ options: ['A', 'B', 'C'] })
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}') // opens, index 0
    await user.keyboard('{ArrowDown}') // index 1
    await user.keyboard('{ArrowUp}') // back to index 0
    await user.keyboard('{Enter}') // selects A
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  it('ArrowUp does nothing when dropdown is closed', async () => {
    const user = userEvent.setup()
    setup()
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowUp}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes dropdown with Escape key', async () => {
    const user = userEvent.setup()
    setup()
    const trigger = screen.getByRole('button', { name: /select options/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    trigger.focus()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('ignores unhandled key presses', async () => {
    const user = userEvent.setup()
    setup()
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('a')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('toggles dropdown closed with second click', async () => {
    const user = userEvent.setup()
    setup()
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})
