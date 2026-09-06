import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComboboxDropdown, type Option } from './ComboboxDropdown'

const OPTIONS: Option[] = [
  { label: 'PHP', value: 'php' },
  { label: 'Javascript', value: 'javascript' },
  { label: 'Java', value: 'java' },
  { label: 'Disabled', value: 'disabled', disabled: true },
]

describe('ComboboxDropdown', () => {
  it('renders the trigger button with placeholder', () => {
    render(<ComboboxDropdown options={OPTIONS} />)
    expect(screen.getByRole('button', { name: /select options/i })).toBeInTheDocument()
  })

  it('shows selected count when options are selected', () => {
    render(<ComboboxDropdown options={OPTIONS} selectedValues={['php']} />)
    expect(screen.getByText('1 item selected')).toBeInTheDocument()
  })

  it('shows plural form for multiple selected', () => {
    render(<ComboboxDropdown options={OPTIONS} selectedValues={['php', 'java']} />)
    expect(screen.getByText('2 items selected')).toBeInTheDocument()
  })

  it('opens dropdown on click', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('calls onChange when an option is clicked', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: /php/i }))
    expect(onChange).toHaveBeenCalledWith(['php'])
  })

  it('deselects an already selected option', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} selectedValues={['php']} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /1 item selected/i }))
    await user.click(screen.getByRole('option', { name: /php/i }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('selects all enabled options via Select All', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByText('Select All'))
    expect(onChange).toHaveBeenCalledWith(['php', 'javascript', 'java'])
  })

  it('clears all selected options via Clear All', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <ComboboxDropdown
        options={OPTIONS}
        selectedValues={['php', 'javascript', 'java']}
        onChange={onChange}
      />,
    )
    await user.click(screen.getByRole('button', { name: /3 items selected/i }))
    await user.click(screen.getByRole('button', { name: /clear all/i }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('does not select disabled options via click', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: /disabled/i }))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('does not select disabled option via keyboard Enter on trigger', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}') // opens, focusIndex=0 (PHP)
    await user.keyboard('{ArrowDown}') // focusIndex=1
    await user.keyboard('{ArrowDown}') // focusIndex=2
    await user.keyboard('{ArrowDown}') // focusIndex=3 (Disabled)
    await user.keyboard('{Enter}') // toggleOption('disabled') -> guarded
    expect(onChange).not.toHaveBeenCalled()
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('navigates with ArrowDown and Enter', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.keyboard('{ArrowDown}{ArrowDown}{Enter}')
    expect(onChange).toHaveBeenCalledWith(['java'])
  })

  it('navigates backward with ArrowUp', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    const cleanOptions: Option[] = [
      { label: 'PHP', value: 'php' },
      { label: 'Javascript', value: 'javascript' },
      { label: 'Java', value: 'java' },
    ]
    render(<ComboboxDropdown options={cleanOptions} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    // Focus starts at index 0 (PHP). ArrowUp wraps to last item (Java).
    await user.keyboard('{ArrowUp}{Enter}')
    expect(onChange).toHaveBeenCalledWith(['java'])
  })

  it('selects option via keyboard Enter on option item', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    const phpOption = screen.getByRole('option', { name: /php/i })
    phpOption.focus()
    await user.keyboard('{Enter}')
    expect(onChange).toHaveBeenCalledWith(['php'])
  })

  it('selects option via keyboard Space on option item', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    const phpOption = screen.getByRole('option', { name: /php/i })
    phpOption.focus()
    await user.keyboard(' ')
    expect(onChange).toHaveBeenCalledWith(['php'])
  })

  it('does not trigger option via Enter on disabled option item', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    const disabledOption = screen.getByRole('option', { name: /disabled/i })
    disabledOption.focus()
    await user.keyboard('{Enter}')
    expect(onChange).not.toHaveBeenCalled()
  })

  it('does not trigger option via Space on disabled option item', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    const disabledOption = screen.getByRole('option', { name: /disabled/i })
    disabledOption.focus()
    await user.keyboard(' ')
    expect(onChange).not.toHaveBeenCalled()
  })

  it('ignores non-selection keys on option items', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    const phpOption = screen.getByRole('option', { name: /php/i })
    phpOption.focus()
    await user.keyboard('{ArrowDown}')
    expect(onChange).not.toHaveBeenCalled()
  })

  it('closes when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <ComboboxDropdown options={OPTIONS} />
        <span>Outside</span>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByText('Outside'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('renders checkmark icon for selected options', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} selectedValues={['php']} />)
    await user.click(screen.getByRole('button', { name: /1 item selected/i }))
    const phpOption = screen.getByRole('option', { name: /php/i })
    expect(phpOption).toHaveAttribute('aria-selected', 'true')
  })

  it('opens dropdown with ArrowDown on trigger', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with Enter on trigger', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with Space on trigger', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard(' ')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with ArrowUp on trigger', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowUp}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('does not open dropdown with other keys on trigger', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{Tab}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('re-opens dropdown after closing', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('closes dropdown when clicking trigger while open', async () => {
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('navigates via keyboard after opening with keyboard', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}') // open dropdown
    await user.keyboard('{ArrowDown}') // move to second option
    await user.keyboard('{Enter}') // select second option
    expect(onChange).toHaveBeenCalledWith(['javascript'])
  })

  it('selects option via Space when dropdown opened with keyboard', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}') // open dropdown, focusIndex=0
    await user.keyboard(' ') // Space on trigger -> select first option
    expect(onChange).toHaveBeenCalledWith(['php'])
  })

  it('ignores non-matching keys when dropdown is open', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<ComboboxDropdown options={OPTIONS} onChange={onChange} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    trigger.focus()
    await user.keyboard('{ArrowDown}') // open dropdown
    await user.keyboard('a') // non-matching key — hits default case
    expect(onChange).not.toHaveBeenCalled()
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('supports custom placeholder', () => {
    render(<ComboboxDropdown options={OPTIONS} placeholder="Pick languages" />)
    expect(screen.getByRole('button', { name: /pick languages/i })).toBeInTheDocument()
  })
})
