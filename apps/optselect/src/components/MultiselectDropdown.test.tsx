import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { MultiselectDropdown, type Option } from './MultiselectDropdown'

const OPTIONS: Option[] = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
]

describe('MultiselectDropdown', () => {
  it('shows placeholder when nothing selected', () => {
    render(<MultiselectDropdown options={OPTIONS} />)
    expect(screen.getByRole('button', { name: /select options/i })).toBeInTheDocument()
  })

  it('shows custom placeholder', () => {
    render(<MultiselectDropdown options={OPTIONS} placeholder="Pick colors" />)
    expect(screen.getByRole('button', { name: /pick colors/i })).toBeInTheDocument()
  })

  it('shows count when items selected', () => {
    render(<MultiselectDropdown options={OPTIONS} selectedValues={['red', 'blue']} />)
    expect(screen.getByRole('button', { name: /2 items selected/i })).toBeInTheDocument()
  })

  it('shows singular count', () => {
    render(<MultiselectDropdown options={OPTIONS} selectedValues={['red']} />)
    expect(screen.getByRole('button', { name: /1 item selected/i })).toBeInTheDocument()
  })

  it('opens dropdown on click', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(3)
  })

  it('sets aria-expanded on trigger', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggles option on click', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: 'Red' }))
    expect(onChange).toHaveBeenCalledWith(['red'])
  })

  it('deselects option on second click', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} selectedValues={['red']} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /1 item selected/i }))
    await user.click(screen.getByRole('option', { name: 'Red' }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('selects all via Select All button', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(onChange).toHaveBeenCalledWith(['red', 'blue', 'green'])
  })

  it('clears all via Clear All button', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <MultiselectDropdown
        options={OPTIONS}
        selectedValues={['red', 'blue', 'green']}
        onChange={onChange}
      />,
    )
    await user.click(screen.getByRole('button', { name: /3 items selected/i }))
    await user.click(screen.getByRole('button', { name: /clear all/i }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('closes on click outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <MultiselectDropdown options={OPTIONS} />
        <span>Outside</span>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByText('Outside'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes on Escape', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('opens dropdown with ArrowDown on closed trigger', () => {
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    fireEvent.keyDown(trigger, { key: 'ArrowDown' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with Enter on closed trigger', () => {
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    fireEvent.keyDown(trigger, { key: 'Enter' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with Space on closed trigger', () => {
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    fireEvent.keyDown(trigger, { key: ' ' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with ArrowUp on closed trigger', () => {
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    fireEvent.keyDown(trigger, { key: 'ArrowUp' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('navigates down with ArrowDown when open', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('navigates up with ArrowUp when open', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.keyboard('{ArrowUp}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('selects with Enter when open', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.keyboard('{Enter}')
    expect(onChange).toHaveBeenCalledWith(['red'])
  })

  it('does not toggle disabled option', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    const options: Option[] = [{ label: 'Locked', value: 'locked', disabled: true }]
    render(<MultiselectDropdown options={options} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('option', { name: 'Locked' }))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('does not include disabled in Select All', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    const options: Option[] = [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b', disabled: true },
    ]
    render(<MultiselectDropdown options={options} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(onChange).toHaveBeenCalledWith(['a'])
  })

  it('toggles dropdown with click', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('does nothing on unrecognised key when closed', () => {
    render(<MultiselectDropdown options={OPTIONS} />)
    const trigger = screen.getByRole('button', { name: /select options/i })
    fireEvent.keyDown(trigger, { key: 'Tab' })
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('does nothing on unrecognised key when open', async () => {
    const user = userEvent.setup()
    render(<MultiselectDropdown options={OPTIONS} />)
    await user.click(screen.getByRole('button', { name: /select options/i }))
    await user.keyboard('{Tab}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })
})
