import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GroupcapMultiSelect, toggleOptionInSet, selectAllInSet } from './GroupcapMultiSelect'
import type { OptionGroup } from './GroupcapMultiSelect'

const TEST_GROUPS: OptionGroup[] = [
  {
    label: 'Group A',
    maxSelections: 2,
    options: ['Alpha', 'Bravo', 'Charlie', 'Delta'],
  },
  {
    label: 'Group B',
    maxSelections: 3,
    options: ['Echo', 'Foxtrot', 'Golf'],
  },
]

describe('toggleOptionInSet', () => {
  it('adds an option when not already selected', () => {
    const prev = new Set<string>()
    const result = toggleOptionInSet('Alpha', prev, TEST_GROUPS)
    expect(result.has('Alpha')).toBe(true)
  })

  it('removes an option when already selected', () => {
    const prev = new Set(['Alpha'])
    const result = toggleOptionInSet('Alpha', prev, TEST_GROUPS)
    expect(result.has('Alpha')).toBe(false)
  })

  it('does not add option beyond group limit', () => {
    const prev = new Set(['Alpha', 'Bravo'])
    const result = toggleOptionInSet('Charlie', prev, TEST_GROUPS)
    expect(result.has('Charlie')).toBe(false)
  })

  it('does not add option not in any group', () => {
    const prev = new Set<string>()
    const result = toggleOptionInSet('Unknown', prev, TEST_GROUPS)
    expect(result.has('Unknown')).toBe(false)
  })
})

describe('selectAllInSet', () => {
  it('fills each group up to its maxSelections', () => {
    const prev = new Set<string>()
    const result = selectAllInSet(prev, TEST_GROUPS)
    // Group A: 2 selected
    expect(result.has('Alpha')).toBe(true)
    expect(result.has('Bravo')).toBe(true)
    // Group B: 3 selected
    expect(result.has('Echo')).toBe(true)
    expect(result.has('Foxtrot')).toBe(true)
    expect(result.has('Golf')).toBe(true)
  })

  it('skips already-selected options when filling', () => {
    const prev = new Set(['Alpha'])
    const result = selectAllInSet(prev, TEST_GROUPS)
    // Group A: Alpha + 1 more (Bravo)
    expect(result.has('Alpha')).toBe(true)
    expect(result.has('Bravo')).toBe(true)
    expect(result.has('Charlie')).toBe(false)
    expect(result.has('Delta')).toBe(false)
  })

  it('does not exceed group limits when some options already selected', () => {
    const prev = new Set(['Alpha', 'Bravo', 'Charlie'])
    const result = selectAllInSet(prev, TEST_GROUPS)
    // Group A: Alpha + Bravo at limit (Charlie is from Group A but was already in set — wait, Charlie is in Group A)
    // Actually Alpha, Bravo are in Group A (limit 2). Charlie is also in Group A.
    // So prev has 3 from Group A but limit is 2. selectAllInSet should not add more.
    expect(result.has('Alpha')).toBe(true)
    expect(result.has('Bravo')).toBe(true)
    expect(result.has('Charlie')).toBe(true)
    // No more from Group A
    expect(result.has('Delta')).toBe(false)
  })
})

describe('GroupcapMultiSelect', () => {
  it('renders with a trigger button showing "Nothing selected"', () => {
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens dropdown when button is clicked', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('shows group headers with limits when dropdown opens', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))

    expect(screen.getByText('Group A (Limit 2)')).toBeInTheDocument()
    expect(screen.getByText('Group B (Limit 3)')).toBeInTheDocument()
  })

  it('shows all options when dropdown opens', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))

    expect(screen.getByLabelText('Alpha')).toBeInTheDocument()
    expect(screen.getByLabelText('Bravo')).toBeInTheDocument()
    expect(screen.getByLabelText('Charlie')).toBeInTheDocument()
    expect(screen.getByLabelText('Delta')).toBeInTheDocument()
    expect(screen.getByLabelText('Echo')).toBeInTheDocument()
    expect(screen.getByLabelText('Foxtrot')).toBeInTheDocument()
    expect(screen.getByLabelText('Golf')).toBeInTheDocument()
  })

  it('selects an option and updates button text', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.click(screen.getByLabelText('Alpha'))

    expect(screen.getByLabelText('Alpha')).toBeChecked()
    const button = screen.getByRole('button', { name: /alpha/i })
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('deselects an already selected option', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.click(screen.getByLabelText('Alpha'))
    expect(screen.getByLabelText('Alpha')).toBeChecked()

    await user.click(screen.getByLabelText('Alpha'))
    expect(screen.getByLabelText('Alpha')).not.toBeChecked()
  })

  it('enforces Group A limit of 2', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.click(screen.getByLabelText('Alpha'))
    await user.click(screen.getByLabelText('Bravo'))

    // At limit — remaining unchecked options should be disabled
    expect(screen.getByLabelText('Charlie')).toBeDisabled()
    expect(screen.getByLabelText('Delta')).toBeDisabled()
  })

  it('enforces Group B limit of 3', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.click(screen.getByLabelText('Echo'))
    await user.click(screen.getByLabelText('Foxtrot'))
    await user.click(screen.getByLabelText('Golf'))

    // Group B is at limit — all checked
    expect(screen.getByLabelText('Echo')).toBeChecked()
    expect(screen.getByLabelText('Foxtrot')).toBeChecked()
    expect(screen.getByLabelText('Golf')).toBeChecked()
  })

  it('keeps group limits independent', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))

    // Fill Group A to its limit
    await user.click(screen.getByLabelText('Alpha'))
    await user.click(screen.getByLabelText('Bravo'))

    // Group B should still be fully selectable
    expect(screen.getByLabelText('Echo')).not.toBeDisabled()
    expect(screen.getByLabelText('Foxtrot')).not.toBeDisabled()
    expect(screen.getByLabelText('Golf')).not.toBeDisabled()
  })

  it('re-enables options when one is deselected in a group', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.click(screen.getByLabelText('Alpha'))
    await user.click(screen.getByLabelText('Bravo'))

    // At limit — Charlie and Delta disabled
    expect(screen.getByLabelText('Charlie')).toBeDisabled()

    // Deselect Alpha
    await user.click(screen.getByLabelText('Alpha'))

    // Charlie and Delta should be enabled again
    expect(screen.getByLabelText('Charlie')).not.toBeDisabled()
    expect(screen.getByLabelText('Delta')).not.toBeDisabled()
  })

  it('filters options when typing in search', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.type(screen.getByPlaceholderText('Search...'), 'Al')

    expect(screen.getByLabelText('Alpha')).toBeInTheDocument()
    expect(screen.queryByLabelText('Bravo')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Echo')).not.toBeInTheDocument()
  })

  it('shows "No results found" when search matches nothing', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.type(screen.getByPlaceholderText('Search...'), 'zzz')

    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('deselects all when "Deselect all" is clicked', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.click(screen.getByLabelText('Alpha'))
    await user.click(screen.getByLabelText('Echo'))

    expect(screen.getByLabelText('Alpha')).toBeChecked()
    expect(screen.getByLabelText('Echo')).toBeChecked()

    await user.click(screen.getByRole('button', { name: /deselect all/i }))

    expect(screen.getByLabelText('Alpha')).not.toBeChecked()
    expect(screen.getByLabelText('Echo')).not.toBeChecked()
    expect(screen.getByRole('button', { name: /nothing selected/i })).toBeInTheDocument()
  })

  it('selects all options up to group limits', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.click(screen.getByRole('button', { name: /select all/i }))

    // Group A: 2 selected (at limit)
    expect(screen.getByLabelText('Alpha')).toBeChecked()
    expect(screen.getByLabelText('Bravo')).toBeChecked()
    expect(screen.getByLabelText('Charlie')).toBeDisabled()
    expect(screen.getByLabelText('Delta')).toBeDisabled()

    // Group B: 3 selected (at limit)
    expect(screen.getByLabelText('Echo')).toBeChecked()
    expect(screen.getByLabelText('Foxtrot')).toBeChecked()
    expect(screen.getByLabelText('Golf')).toBeChecked()
  })

  it('closes dropdown on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <GroupcapMultiSelect groups={TEST_GROUPS} />
        <button type="button">Outside</button>
      </div>,
    )

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()
  })

  it('closes dropdown on Escape key', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()
  })

  it('shows multiple selected items in button text', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.click(screen.getByLabelText('Alpha'))
    await user.click(screen.getByLabelText('Echo'))

    const button = screen.getByRole('button', { name: /alpha, echo/i })
    expect(button).toBeInTheDocument()
  })

  it('renders search input with accessible label', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))

    expect(screen.getByLabelText('Search options')).toBeInTheDocument()
  })

  it('clears search when closing dropdown by clicking button', async () => {
    const user = userEvent.setup()
    render(<GroupcapMultiSelect groups={TEST_GROUPS} />)

    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    await user.type(screen.getByPlaceholderText('Search...'), 'Al')
    expect(screen.getByLabelText('Alpha')).toBeInTheDocument()
    expect(screen.queryByLabelText('Bravo')).not.toBeInTheDocument()

    // Close by clicking the button again
    await user.click(screen.getByRole('button', { name: /nothing selected/i }))

    // Re-open — search should be cleared, all options visible
    await user.click(screen.getByRole('button', { name: /nothing selected/i }))
    expect(screen.getByLabelText('Bravo')).toBeInTheDocument()
  })
})
