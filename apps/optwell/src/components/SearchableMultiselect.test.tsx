import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SearchableMultiselect, type Option } from './SearchableMultiselect'

const OPTIONS: Option[] = [
  { label: 'Alaska', value: 'alaska' },
  { label: 'Hawaii', value: 'hawaii' },
  { label: 'California', value: 'california' },
]

describe('SearchableMultiselect', () => {
  it('shows placeholder when nothing selected', () => {
    render(<SearchableMultiselect options={OPTIONS} />)
    expect(screen.getByText('Select states')).toBeInTheDocument()
  })

  it('shows custom placeholder', () => {
    render(<SearchableMultiselect options={OPTIONS} placeholder="Pick states" />)
    expect(screen.getByText('Pick states')).toBeInTheDocument()
  })

  it('opens dropdown on click', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    await user.click(screen.getByText('Select states'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(3)
  })

  it('closes dropdown on second click', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    const trigger = screen.getByText('Select states')
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('sets aria-expanded on trigger', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggles option on click', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByText('Select states'))
    await user.click(screen.getByRole('option', { name: 'Alaska' }))
    expect(onChange).toHaveBeenCalledWith(['alaska'])
  })

  it('deselects option on second click', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <SearchableMultiselect options={OPTIONS} selectedValues={['alaska']} onChange={onChange} />,
    )
    await user.click(screen.getByText('Alaska'))
    await user.click(screen.getByRole('option', { name: 'Alaska' }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('shows selected tags', () => {
    render(<SearchableMultiselect options={OPTIONS} selectedValues={['alaska', 'hawaii']} />)
    expect(screen.getByText('Alaska')).toBeInTheDocument()
    expect(screen.getByText('Hawaii')).toBeInTheDocument()
  })

  it('removes tag via remove button', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <SearchableMultiselect options={OPTIONS} selectedValues={['alaska']} onChange={onChange} />,
    )
    await user.click(screen.getByRole('button', { name: /remove alaska/i }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('search filters options', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    await user.click(screen.getByText('Select states'))
    await user.type(screen.getByLabelText('Search states'), 'Cal')
    expect(screen.getByRole('option', { name: 'California' })).toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Alaska' })).not.toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Hawaii' })).not.toBeInTheDocument()
  })

  it('navigates with ArrowDown in search input', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    await user.click(screen.getByText('Select states'))
    await user.type(screen.getByLabelText('Search states'), '{ArrowDown}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('navigates with ArrowUp in search input', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    await user.click(screen.getByText('Select states'))
    await user.type(screen.getByLabelText('Search states'), '{ArrowDown}{ArrowUp}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('selects option with Enter in search input', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByText('Select states'))
    await user.type(screen.getByLabelText('Search states'), '{Enter}')
    expect(onChange).toHaveBeenCalledWith(['alaska'])
  })

  it('shows no results found', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    await user.click(screen.getByText('Select states'))
    await user.type(screen.getByLabelText('Search states'), 'xyz')
    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('clears search after selection', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    await user.click(screen.getByText('Select states'))
    await user.type(screen.getByLabelText('Search states'), 'Alas')
    await user.click(screen.getByRole('option', { name: 'Alaska' }))
    const searchInput = screen.getByLabelText('Search states')
    expect(searchInput).toHaveValue('')
  })

  it('selects all via Select All button', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByText('Select states'))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(onChange).toHaveBeenCalledWith(['alaska', 'hawaii', 'california'])
  })

  it('clears all via Clear All button', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <SearchableMultiselect
        options={OPTIONS}
        selectedValues={['alaska', 'hawaii', 'california']}
        onChange={onChange}
      />,
    )
    await user.click(screen.getByText('Alaska'))
    await user.click(screen.getByRole('button', { name: /clear all/i }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('closes on click outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <SearchableMultiselect options={OPTIONS} />
        <span>Outside</span>
      </div>,
    )
    await user.click(screen.getByText('Select states'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByText('Outside'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes on Escape', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    await user.click(screen.getByText('Select states'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('opens dropdown with ArrowDown on closed trigger', () => {
    render(<SearchableMultiselect options={OPTIONS} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.keyDown(trigger, { key: 'ArrowDown' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with Enter on closed trigger', () => {
    render(<SearchableMultiselect options={OPTIONS} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.keyDown(trigger, { key: 'Enter' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with Space on closed trigger', () => {
    render(<SearchableMultiselect options={OPTIONS} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.keyDown(trigger, { key: ' ' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with ArrowUp on closed trigger', () => {
    render(<SearchableMultiselect options={OPTIONS} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.keyDown(trigger, { key: 'ArrowUp' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('does nothing on unrecognised key when closed', () => {
    render(<SearchableMultiselect options={OPTIONS} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.keyDown(trigger, { key: 'Tab' })
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('does not include disabled in Select All', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    const options: Option[] = [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b', disabled: true },
    ]
    render(<SearchableMultiselect options={options} onChange={onChange} />)
    await user.click(screen.getByText('Select states'))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(onChange).toHaveBeenCalledWith(['a'])
  })

  it('does not toggle disabled option', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    const options: Option[] = [{ label: 'Locked', value: 'locked', disabled: true }]
    render(<SearchableMultiselect options={options} onChange={onChange} />)
    await user.click(screen.getByText('Select states'))
    await user.click(screen.getByRole('option', { name: 'Locked' }))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('does not open again when key pressed on open combobox', async () => {
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} />)
    await user.click(screen.getByText('Select states'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    // Refocus the combobox and press a key
    const trigger = screen.getByRole('combobox')
    trigger.focus()
    fireEvent.keyDown(trigger, { key: 'ArrowDown' })
    // Dropdown should still be open (not closed)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('Enter on search with no matching option does nothing', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<SearchableMultiselect options={OPTIONS} onChange={onChange} />)
    await user.click(screen.getByText('Select states'))
    // Filter to nothing
    await user.type(screen.getByLabelText('Search states'), 'zzz')
    // focusIndex is 0 but filteredOptions is empty
    await user.keyboard('{Enter}')
    expect(onChange).not.toHaveBeenCalled()
  })

  it('handles selectedValue with no matching option', () => {
    render(<SearchableMultiselect options={OPTIONS} selectedValues={['nonexistent']} />)
    // Should not crash - the map guard returns null
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })
})
