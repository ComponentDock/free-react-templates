import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders heading and footer', () => {
    render(<App />)

    expect(document.title).toBe('OptBundle — Multiselect Template')

    expect(screen.getByRole('heading', { level: 2, name: /optbundle/i })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

describe('Multiselect', () => {
  it('shows placeholder text when nothing is selected', () => {
    render(<App />)

    expect(screen.getByText('Your Favorite Football Teams')).toBeInTheDocument()
  })

  it('opens the dropdown on click and shows groups', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))

    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'NFC EAST' })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'AFC WEST' })).toBeInTheDocument()
  })

  it('shows 8 group headers', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))

    const groups = screen.getAllByRole('group')
    expect(groups).toHaveLength(8)
  })

  it('shows 4 items per group', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))

    const nfcEast = screen.getByRole('group', { name: 'NFC EAST' })
    const options = within(nfcEast).getAllByRole('option')
    expect(options).toHaveLength(4)
    expect(options[0]).toHaveTextContent('Dallas Cowboys')
  })

  it('selects an item and shows a chip', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    await user.click(screen.getByText('Dallas Cowboys'))

    // Item appears as both chip (in trigger) and option (in dropdown)
    const items = screen.getAllByText('Dallas Cowboys')
    expect(items.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('button', { name: /remove dallas cowboys/i })).toBeInTheDocument()
  })

  it('deselects an item via chip remove button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    await user.click(screen.getByText('Dallas Cowboys'))
    await user.click(screen.getByText('Green Bay Packers'))

    const removeBtn = screen.getByRole('button', { name: /remove dallas cowboys/i })
    await user.click(removeBtn)

    expect(screen.queryByRole('button', { name: /remove dallas cowboys/i })).not.toBeInTheDocument()
    expect(screen.getAllByText('Green Bay Packers').length).toBeGreaterThanOrEqual(1)
  })

  it('searches within the dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))

    const searchInput = screen.getByPlaceholderText('Search...')
    await user.type(searchInput, 'Cowboys')

    const nfcEast = screen.getByRole('group', { name: 'NFC EAST' })
    const options = within(nfcEast).getAllByRole('option')
    expect(options).toHaveLength(1)
    expect(options[0]).toHaveTextContent('Dallas Cowboys')
  })

  it('hides empty groups when searching', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))

    const searchInput = screen.getByPlaceholderText('Search...')
    await user.type(searchInput, 'Cowboys')

    const groups = screen.getAllByRole('group')
    expect(groups).toHaveLength(1)
  })

  it('shows no results message for unmatched search', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))

    const searchInput = screen.getByPlaceholderText('Search...')
    await user.type(searchInput, 'zzzzz')

    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('selects items from different groups', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    await user.click(screen.getByText('Dallas Cowboys'))
    await user.click(screen.getByText('Chicago Bears'))

    expect(screen.getAllByText('Dallas Cowboys').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Chicago Bears').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('button', { name: /remove dallas cowboys/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /remove chicago bears/i })).toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    await user.click(document.body)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('toggles dropdown open/closed on trigger click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const trigger = screen.getByText('Your Favorite Football Teams')
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    await user.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('marks selected options in dropdown as selected', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    await user.click(screen.getByText('Dallas Cowboys'))

    const option = screen.getByRole('option', { name: 'Dallas Cowboys' })
    expect(option).toHaveAttribute('aria-selected', 'true')
  })

  it('deselects an option by clicking it again in the dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    await user.click(screen.getByText('Dallas Cowboys'))
    const option = screen.getByRole('option', { name: 'Dallas Cowboys' })
    await user.click(option)

    expect(screen.queryByRole('button', { name: /remove dallas cowboys/i })).not.toBeInTheDocument()
  })

  it('has accessible ARIA attributes on trigger', async () => {
    const user = userEvent.setup()
    render(<App />)

    const trigger = screen.getByRole('button', {
      name: /your favorite football teams/i,
    })
    expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('clears search when dropdown closes', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    const searchInput = screen.getByPlaceholderText('Search...')
    await user.type(searchInput, 'Cowboys')

    await user.click(document.body)
    await user.click(screen.getByText('Your Favorite Football Teams'))

    const newSearch = screen.getByPlaceholderText('Search...')
    expect(newSearch).toHaveValue('')
  })

  it('opens dropdown with Enter key on trigger', async () => {
    const user = userEvent.setup()
    render(<App />)

    const trigger = screen.getByRole('button', {
      name: /your favorite football teams/i,
    })
    trigger.focus()
    await user.keyboard('{Enter}')

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown with Space key on trigger', async () => {
    const user = userEvent.setup()
    render(<App />)

    const trigger = screen.getByRole('button', {
      name: /your favorite football teams/i,
    })
    trigger.focus()
    await user.keyboard(' ')

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('ignores non-Enter/Space key on trigger', async () => {
    const user = userEvent.setup()
    render(<App />)

    const trigger = screen.getByRole('button', {
      name: /your favorite football teams/i,
    })
    trigger.focus()
    await user.keyboard('{ArrowDown}')

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('removes chip with Enter key', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    await user.click(screen.getByText('Dallas Cowboys'))

    const removeBtn = screen.getByRole('button', { name: /remove dallas cowboys/i })
    removeBtn.focus()
    await user.keyboard('{Enter}')

    expect(screen.queryByRole('button', { name: /remove dallas cowboys/i })).not.toBeInTheDocument()
  })

  it('removes chip with Space key', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    await user.click(screen.getByText('Dallas Cowboys'))

    const removeBtn = screen.getByRole('button', { name: /remove dallas cowboys/i })
    removeBtn.focus()
    await user.keyboard(' ')

    expect(screen.queryByRole('button', { name: /remove dallas cowboys/i })).not.toBeInTheDocument()
  })

  it('ignores non-Enter/Space key on chip remove button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByText('Your Favorite Football Teams'))
    await user.click(screen.getByText('Dallas Cowboys'))

    const removeBtn = screen.getByRole('button', { name: /remove dallas cowboys/i })
    removeBtn.focus()
    await user.keyboard('{ArrowDown}')

    // Chip still present — other keys are ignored
    expect(screen.getByRole('button', { name: /remove dallas cowboys/i })).toBeInTheDocument()
  })
})
