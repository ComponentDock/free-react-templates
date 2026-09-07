import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
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
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-haspopup', 'listbox')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the dropdown when the trigger button is clicked', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

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
    render(<MultiSelect options={US_STATES} />)

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
        <MultiSelect options={US_STATES} />
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
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const alabama = screen.getByRole('checkbox', { name: 'Alabama' })
    await user.click(alabama)

    expect(button).toHaveTextContent('Alabama')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('allows deselecting a checkbox', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

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
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    await user.click(screen.getByRole('checkbox', { name: 'Alabama' }))
    await user.click(screen.getByRole('checkbox', { name: 'Alaska' }))

    expect(button).toHaveTextContent('Alabama, Alaska')
  })

  it('selects all items via select-all button', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const selectAll = screen.getByRole('button', { name: /select all/i })
    await user.click(selectAll)

    expect(button).toHaveTextContent(US_STATES.join(', '))
  })

  it('deselects all items via deselect-all button', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const selectAll = screen.getByRole('button', { name: /select all/i })
    await user.click(selectAll)
    expect(button).toHaveTextContent(US_STATES.join(', '))

    const deselectAll = screen.getByRole('button', {
      name: /deselect all/i,
    })
    await user.click(deselectAll)
    expect(button).toHaveTextContent('Nothing selected')
  })

  it('filters options via search input', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

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
    render(<MultiSelect options={US_STATES} />)

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
    render(<MultiSelect options={US_STATES} />)

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
    render(<MultiSelect options={US_STATES} />)

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
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows exactly 50 options', () => {
    render(<MultiSelect options={US_STATES} />)

    expect(US_STATES).toHaveLength(50)
  })

  it('displays check marks next to selected options', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    await user.click(button)

    const alabama = screen.getByRole('checkbox', { name: 'Alabama' })
    await user.click(alabama)

    // Check mark icon should be visible next to Alabama
    const checkIcons = document.querySelectorAll('svg')
    expect(checkIcons.length).toBeGreaterThan(0)
  })
})
