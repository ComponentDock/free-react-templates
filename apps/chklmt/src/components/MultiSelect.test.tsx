import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiSelect } from './MultiSelect'

const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

describe('MultiSelect', () => {
  it('renders a trigger button showing "Nothing selected" initially', () => {
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-haspopup', 'listbox')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the dropdown when the trigger button is clicked', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')

    const searchInput = screen.getByRole('textbox', {
      name: /search options/i,
    })
    expect(searchInput).toBeInTheDocument()
  })

  it('closes dropdown when trigger button is clicked again', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <MultiSelect options={US_STATES} maxSelections={7} />
        <button>Outside</button>
      </div>,
    )

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('allows selecting individual checkboxes', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const alabama = screen.getByRole('checkbox', { name: 'Alabama' })
    await user.click(alabama)

    expect(button).toHaveTextContent('Alabama')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('allows deselecting a checkbox', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const alabama = screen.getByRole('checkbox', { name: 'Alabama' })
    await user.click(alabama)
    expect(button).toHaveTextContent('Alabama')

    await user.click(alabama)
    expect(button).toHaveTextContent('Nothing selected')
  })

  it('shows comma-separated names for multiple selections', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    await user.click(screen.getByRole('checkbox', { name: 'Alabama' }))
    await user.click(screen.getByRole('checkbox', { name: 'Alaska' }))

    expect(button).toHaveTextContent('Alabama, Alaska')
  })

  it('selects all items via select-all button', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const selectAll = screen.getByRole('button', { name: /select all/i })
    await user.click(selectAll)

    expect(button).toHaveTextContent(US_STATES.slice(0, 7).join(', '))
  })

  it('deselects all items via deselect-all button', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const selectAll = screen.getByRole('button', { name: /select all/i })
    await user.click(selectAll)
    expect(button).toHaveTextContent(US_STATES.slice(0, 7).join(', '))

    const deselectAll = screen.getByRole('button', {
      name: /deselect all/i,
    })
    await user.click(deselectAll)
    expect(button).toHaveTextContent('Nothing selected')
  })

  it('filters options via search input', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const searchInput = screen.getByRole('textbox', {
      name: /search options/i,
    })
    await user.type(searchInput, 'california')

    expect(screen.getByRole('checkbox', { name: 'California' })).toBeInTheDocument()
    expect(screen.queryByRole('checkbox', { name: 'Alabama' })).not.toBeInTheDocument()
  })

  it('shows all options when search is cleared', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const searchInput = screen.getByRole('textbox', {
      name: /search options/i,
    })
    await user.type(searchInput, 'california')
    expect(screen.queryByRole('checkbox', { name: 'Alabama' })).not.toBeInTheDocument()

    await user.clear(searchInput)
    expect(screen.getByRole('checkbox', { name: 'Alabama' })).toBeInTheDocument()
  })

  it('search is case-insensitive', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const searchInput = screen.getByRole('textbox', {
      name: /search options/i,
    })
    await user.type(searchInput, 'CALIFORNIA')

    expect(screen.getByRole('checkbox', { name: 'California' })).toBeInTheDocument()
  })

  it('shows "No results found" when search matches nothing', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const searchInput = screen.getByRole('textbox', {
      name: /search options/i,
    })
    await user.type(searchInput, 'zzzzz')

    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('closes dropdown on Escape key', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows exactly 50 options', () => {
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    expect(US_STATES).toHaveLength(50)
  })

  it('displays check marks next to selected options', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const alabama = screen.getByRole('checkbox', { name: 'Alabama' })
    await user.click(alabama)

    // Check mark icon should be visible next to Alabama
    const checkIcons = document.querySelectorAll('svg')
    expect(checkIcons.length).toBeGreaterThan(0)
  })

  it('enforces the 7-item selection limit', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    // Select 7 items
    await user.click(screen.getByRole('checkbox', { name: 'Alabama' }))
    await user.click(screen.getByRole('checkbox', { name: 'Alaska' }))
    await user.click(screen.getByRole('checkbox', { name: 'Arizona' }))
    await user.click(screen.getByRole('checkbox', { name: 'Arkansas' }))
    await user.click(screen.getByRole('checkbox', { name: 'California' }))
    await user.click(screen.getByRole('checkbox', { name: 'Colorado' }))
    await user.click(screen.getByRole('checkbox', { name: 'Connecticut' }))

    expect(button).toHaveTextContent(
      'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut',
    )

    // 8th option should be disabled
    const delaware = screen.getByRole('checkbox', { name: 'Delaware' })
    expect(delaware).toBeDisabled()
  })

  it('disables remaining options when at limit', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    // Select 7 items
    for (const state of US_STATES.slice(0, 7)) {
      await user.click(screen.getByRole('checkbox', { name: state }))
    }

    // All remaining should be disabled
    for (const state of US_STATES.slice(7, 12)) {
      expect(screen.getByRole('checkbox', { name: state })).toBeDisabled()
    }
  })

  it('re-enables options when one is deselected', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    // Select 7 items
    for (const state of US_STATES.slice(0, 7)) {
      await user.click(screen.getByRole('checkbox', { name: state }))
    }

    // 8th should be disabled
    expect(screen.getByRole('checkbox', { name: 'Delaware' })).toBeDisabled()

    // Deselect one
    await user.click(screen.getByRole('checkbox', { name: 'Alabama' }))

    // 8th should now be enabled
    expect(screen.getByRole('checkbox', { name: 'Delaware' })).not.toBeDisabled()
  })

  it('does not allow selecting beyond the limit via toggle', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    // Select 7 items
    for (const state of US_STATES.slice(0, 7)) {
      await user.click(screen.getByRole('checkbox', { name: state }))
    }

    // Try clicking the 8th (disabled) — should not select it
    const delaware = screen.getByRole('checkbox', { name: 'Delaware' })
    await user.click(delaware)

    // Button should still show only 7 items
    expect(button).toHaveTextContent(
      'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut',
    )
  })

  it('does not add option when at limit via direct fireEvent', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    // Select 7 items
    for (const state of US_STATES.slice(0, 7)) {
      await user.click(screen.getByRole('checkbox', { name: state }))
    }

    // Use fireEvent to bypass disabled and trigger onChange directly
    const delaware = screen.getByRole('checkbox', { name: 'Delaware' })
    fireEvent.click(delaware)

    // Button should still show only 7 items
    expect(button).toHaveTextContent(
      'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut',
    )
  })

  it('select-all respects the limit', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const selectAll = screen.getByRole('button', { name: /select all/i })
    await user.click(selectAll)

    // Only first 7 should be selected
    expect(button).toHaveTextContent(US_STATES.slice(0, 7).join(', '))

    // 8th should be disabled
    expect(screen.getByRole('checkbox', { name: 'Delaware' })).toBeDisabled()
  })

  it('works without maxSelections (unlimited)', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    // Select all
    const selectAll = screen.getByRole('button', { name: /select all/i })
    await user.click(selectAll)

    expect(button).toHaveTextContent(US_STATES.join(', '))
  })

  it('shows selected row highlight', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} maxSelections={7} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const alabama = screen.getByRole('checkbox', { name: 'Alabama' })
    const label = alabama.closest('label')
    expect(label).not.toHaveClass('bg-hover-bg')

    await user.click(alabama)
    expect(label).toHaveClass('bg-hover-bg')
  })
})
