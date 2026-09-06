import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiselectDropdown } from './MultiselectDropdown'
import type { Option } from './MultiselectDropdown'

const OPTIONS: Option[] = [
  { label: 'Orange', value: 'orange' },
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Pineapple', value: 'pineapple', disabled: true },
]

describe('MultiselectDropdown', () => {
  it('renders the trigger button with placeholder text', () => {
    render(<MultiselectDropdown options={OPTIONS} />)
    expect(screen.getByRole('button', { name: /select options/i })).toBeInTheDocument()
  })

  it('shows "N items selected" when options are selected', () => {
    render(<MultiselectDropdown options={OPTIONS} selectedValues={['orange', 'apple']} />)
    expect(screen.getByRole('button', { name: /2 items selected/i })).toBeInTheDocument()
  })

  it('shows "1 item selected" when one option is selected', () => {
    render(<MultiselectDropdown options={OPTIONS} selectedValues={['orange']} />)
    expect(screen.getByRole('button', { name: /1 item selected/i })).toBeInTheDocument()
  })

  it('opens dropdown on trigger click', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(OPTIONS.length)
  })

  it('closes dropdown on second trigger click', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('calls onChange when an option is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MultiselectDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: /^orange$/i }))
    expect(onChange).toHaveBeenCalledWith(['orange'])
  })

  it('deselects an already selected option', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <MultiselectDropdown options={OPTIONS} selectedValues={['orange']} onChange={onChange} />,
    )
    await user.click(screen.getByRole('button', { name: /1 item selected/i }))
    await user.click(screen.getByRole('option', { name: /^orange$/i }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('allows multiple selections', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <MultiselectDropdown options={OPTIONS} selectedValues={['orange']} onChange={onChange} />,
    )
    await user.click(screen.getByRole('button', { name: /1 item selected/i }))
    await user.click(screen.getByRole('option', { name: /^apple$/i }))
    expect(onChange).toHaveBeenCalledWith(['orange', 'apple'])
  })

  it('shows Select All button when not all are selected', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('button', { name: /select all/i })).toBeInTheDocument()
  })

  it('shows Clear All button when all are selected', async () => {
    const user = userEvent.setup()
    const enabledValues = OPTIONS.filter((o) => !o.disabled).map((o) => o.value)
    render(<MultiselectDropdown options={OPTIONS} selectedValues={enabledValues} />)
    await user.click(screen.getByRole('button', { name: /5 items selected/i }))
    expect(screen.getByRole('button', { name: /clear all/i })).toBeInTheDocument()
  })

  it('Select All selects all enabled options', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MultiselectDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(onChange).toHaveBeenCalledWith(['orange', 'apple', 'banana', 'grapes', 'strawberry'])
  })

  it('Clear All clears all selections', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    const enabledValues = OPTIONS.filter((o) => !o.disabled).map((o) => o.value)
    render(
      <MultiselectDropdown options={OPTIONS} selectedValues={enabledValues} onChange={onChange} />,
    )
    await user.click(screen.getByRole('button', { name: /5 items selected/i }))
    await user.click(screen.getByRole('button', { name: /clear all/i }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('disables the disabled option', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MultiselectDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: /^pineapple$/i }))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('navigates with ArrowDown and selects with Space', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MultiselectDropdown options={OPTIONS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    // Open via keyboard to set focusIndex to 0
    trigger.focus()
    await user.keyboard('{Enter}')
    // focusIndex=0 (Orange). ArrowDown → focusIndex=1 (Apple). Space → toggle Apple.
    await user.keyboard('{ArrowDown}')
    await user.keyboard(' ')
    expect(onChange).toHaveBeenCalledWith(['apple'])
  })

  it('navigates backwards with ArrowUp', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MultiselectDropdown options={OPTIONS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    // focusIndex=0 (Orange). ArrowUp → focusIndex=5 (Pineapple). Space → Pineapple is disabled, no change.
    await user.keyboard('{ArrowUp}')
    await user.keyboard(' ')
    // Pineapple is disabled, so onChange should not be called
    expect(onChange).not.toHaveBeenCalled()
    // ArrowUp again → focusIndex=4 (Strawberry). Space → toggle Strawberry.
    await user.keyboard('{ArrowUp}')
    await user.keyboard(' ')
    expect(onChange).toHaveBeenCalledWith(['strawberry'])
  })

  it('closes on click outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <MultiselectDropdown options={OPTIONS} />
        <button type="button">Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('sets aria-expanded on trigger', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('has aria-haspopup on trigger', () => {
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
  })

  it('options have aria-multiselectable on listbox', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    const listbox = screen.getByRole('listbox')
    expect(listbox).toHaveAttribute('aria-multiselectable')
  })

  it('opens on ArrowDown key when closed', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens on Enter key when closed', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('toggles option with Enter key when open', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<MultiselectDropdown options={OPTIONS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    // focusIndex=0 (Orange), Enter → toggle Orange
    await user.keyboard('{Enter}')
    expect(onChange).toHaveBeenCalledWith(['orange'])
  })

  it('uses custom placeholder', () => {
    render(<MultiselectDropdown options={OPTIONS} placeholder="Pick fruits" />)
    expect(screen.getByRole('button', { name: /pick fruits/i })).toBeInTheDocument()
  })

  it('ignores non-matching keys when dropdown is closed', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('a')
    // Dropdown should remain closed
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('ignores non-matching keys when dropdown is open', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    // Press a non-matching key — should not crash or close
    await user.keyboard('a')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })
})
