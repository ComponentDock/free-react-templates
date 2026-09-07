import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiSelect } from './MultiSelect'
import type { MultiSelectOption } from './MultiSelect'

const OPTIONS: MultiSelectOption[] = [
  { label: 'Design', value: 'design' },
  { label: 'HTML5', value: 'html5' },
  { label: 'CSS3', value: 'css3' },
  { label: 'jQuery', value: 'jquery' },
  { label: 'BS4', value: 'bs4' },
  { label: 'Bootstrap', value: 'bootstrap' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'FrontEnd', value: 'frontend' },
]

function renderMultiSelect(props: Partial<React.ComponentProps<typeof MultiSelect>> = {}) {
  const onChange = vi.fn()
  return {
    onChange,
    ...render(<MultiSelect options={OPTIONS} selected={[]} onChange={onChange} {...props} />),
  }
}

describe('MultiSelect', () => {
  it('renders with placeholder text when no items selected', () => {
    renderMultiSelect()
    expect(screen.getByText('Select options...')).toBeInTheDocument()
  })

  it('shows custom placeholder', () => {
    renderMultiSelect({ placeholder: 'Pick tags...' })
    expect(screen.getByText('Pick tags...')).toBeInTheDocument()
  })

  it('opens the dropdown on click', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('shows all 8 options in the dropdown', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    await user.click(screen.getByRole('combobox'))
    for (const opt of OPTIONS) {
      expect(screen.getByRole('option', { name: opt.label })).toBeInTheDocument()
    }
  })

  it('selecting an option creates a chip and calls onChange', async () => {
    const user = userEvent.setup()
    const { onChange } = renderMultiSelect()
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByRole('option', { name: 'Design' }))
    expect(onChange).toHaveBeenCalledWith(['design'])
  })

  it('shows selected items as chips with remove button', () => {
    renderMultiSelect({ selected: ['design', 'html5'] })
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Remove Design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Remove HTML5' })).toBeInTheDocument()
  })

  it('removes a chip when the remove button is clicked', async () => {
    const user = userEvent.setup()
    const { onChange } = renderMultiSelect({ selected: ['design'] })
    await user.click(screen.getByRole('button', { name: 'Remove Design' }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('supports keyboard: Escape closes dropdown', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('supports keyboard: Enter toggles dropdown', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    const combobox = screen.getByRole('combobox')
    combobox.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Enter}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('supports keyboard: Space toggles dropdown', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    const combobox = screen.getByRole('combobox')
    combobox.focus()
    await user.keyboard(' ')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard(' ')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('filters options by search query', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    await user.click(screen.getByRole('combobox'))
    const searchInput = screen.getByPlaceholderText('Search...')
    await user.type(searchInput, 'boot')
    expect(screen.getByRole('option', { name: 'Bootstrap' })).toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Design' })).not.toBeInTheDocument()
  })

  it('shows "No results found" when search has no matches', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    await user.click(screen.getByRole('combobox'))
    const searchInput = screen.getByPlaceholderText('Search...')
    await user.type(searchInput, 'zzzzz')
    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('shows custom search placeholder', async () => {
    const user = userEvent.setup()
    renderMultiSelect({ searchPlaceholder: 'Filter...' })
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByPlaceholderText('Filter...')).toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <MultiSelect options={OPTIONS} selected={[]} onChange={vi.fn()} />
        <button>Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('selected options are excluded from dropdown list', async () => {
    const user = userEvent.setup()
    renderMultiSelect({ selected: ['design'] })
    await user.click(screen.getByRole('combobox'))
    expect(screen.queryByRole('option', { name: 'Design' })).not.toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'HTML5' })).toBeInTheDocument()
  })

  it('remove button stops event propagation', async () => {
    const user = userEvent.setup()
    const { onChange } = renderMultiSelect({ selected: ['design'] })
    await user.click(screen.getByRole('button', { name: 'Remove Design' }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('does not open dropdown when clicking remove button', async () => {
    const user = userEvent.setup()
    renderMultiSelect({ selected: ['design'] })
    await user.click(screen.getByRole('button', { name: 'Remove Design' }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('shows empty state when no options provided', () => {
    renderMultiSelect({ options: [] })
    expect(screen.getByText('Select options...')).toBeInTheDocument()
  })

  it('search input stops propagation on click', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    await user.click(screen.getByRole('combobox'))
    const searchInput = screen.getByPlaceholderText('Search...')
    await user.click(searchInput)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('does not toggle dropdown when Enter pressed on search input', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    await user.click(screen.getByRole('combobox'))
    const searchInput = screen.getByPlaceholderText('Search...')
    await user.click(searchInput)
    const listbox = screen.getByRole('listbox')
    await user.keyboard('{Enter}')
    expect(screen.getByRole('listbox')).toBe(listbox)
  })

  it('does not toggle dropdown when Space pressed on search input', async () => {
    const user = userEvent.setup()
    renderMultiSelect()
    await user.click(screen.getByRole('combobox'))
    const searchInput = screen.getByPlaceholderText('Search...')
    await user.click(searchInput)
    const listbox = screen.getByRole('listbox')
    await user.keyboard(' ')
    expect(screen.getByRole('listbox')).toBe(listbox)
  })

  it('selecting an already-selected option does not duplicate chip', async () => {
    const user = userEvent.setup()
    const { onChange } = renderMultiSelect({ selected: ['design'] })
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByRole('option', { name: 'HTML5' }))
    expect(onChange).toHaveBeenCalledWith(['design', 'html5'])
  })
})
