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
  it('renders a trigger button showing "0 selected" initially', () => {
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-haspopup', 'listbox')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the dropdown when the trigger button is clicked', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')

    const searchInput = screen.getByRole('textbox', { name: /search options/i })
    expect(searchInput).toBeInTheDocument()
  })

  it('closes dropdown when trigger button is clicked again', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
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

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('allows selecting individual checkboxes', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)

    const alabama = screen.getByRole('checkbox', { name: 'Alabama' })
    await user.click(alabama)

    expect(button).toHaveTextContent('1 selected')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('allows deselecting a checkbox', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)

    const alabama = screen.getByRole('checkbox', { name: 'Alabama' })
    await user.click(alabama)
    expect(button).toHaveTextContent('1 selected')

    await user.click(alabama)
    expect(button).toHaveTextContent('0 selected')
  })

  it('selects all items via select-all link', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)

    const selectAll = screen.getByRole('button', { name: /select all/i })
    await user.click(selectAll)

    expect(button).toHaveTextContent(`${US_STATES.length} selected`)
  })

  it('deselects all items via deselect-all link', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)

    const selectAll = screen.getByRole('button', { name: /select all/i })
    await user.click(selectAll)
    expect(button).toHaveTextContent(`${US_STATES.length} selected`)

    const deselectAll = screen.getByRole('button', { name: /deselect all/i })
    await user.click(deselectAll)
    expect(button).toHaveTextContent('0 selected')
  })

  it('filters options via search input', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)

    const searchInput = screen.getByRole('textbox', { name: /search options/i })
    await user.type(searchInput, 'california')

    expect(screen.getByRole('checkbox', { name: 'California' })).toBeInTheDocument()
    expect(screen.queryByRole('checkbox', { name: 'Alabama' })).not.toBeInTheDocument()
  })

  it('shows all options when search is cleared', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)

    const searchInput = screen.getByRole('textbox', { name: /search options/i })
    await user.type(searchInput, 'california')
    expect(screen.queryByRole('checkbox', { name: 'Alabama' })).not.toBeInTheDocument()

    await user.clear(searchInput)
    expect(screen.getByRole('checkbox', { name: 'Alabama' })).toBeInTheDocument()
  })

  it('search is case-insensitive', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)

    const searchInput = screen.getByRole('textbox', { name: /search options/i })
    await user.type(searchInput, 'CALIFORNIA')

    expect(screen.getByRole('checkbox', { name: 'California' })).toBeInTheDocument()
  })

  it('shows "No results found" when search matches nothing', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)

    const searchInput = screen.getByRole('textbox', { name: /search options/i })
    await user.type(searchInput, 'zzzzz')

    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('closes dropdown on Escape key', async () => {
    const user = userEvent.setup()
    render(<MultiSelect options={US_STATES} />)

    const button = screen.getByRole('button', { name: /0 selected/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
