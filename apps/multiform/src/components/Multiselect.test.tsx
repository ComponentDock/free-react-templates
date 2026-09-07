import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Multiselect } from './Multiselect'

const TEST_STATES = ['Alabama', 'Alaska', 'Arizona', 'California', 'New York'] as const

describe('Multiselect', () => {
  it('shows "None selected" by default', () => {
    render(<Multiselect states={TEST_STATES} />)
    expect(screen.getByRole('button', { name: /none selected/i })).toBeInTheDocument()
  })

  it('opens dropdown on trigger click', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/search states/i)).toBeInTheDocument()
  })

  it('lists all states in the dropdown', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    for (const state of TEST_STATES) {
      expect(screen.getByRole('option', { name: state })).toBeInTheDocument()
    }
  })

  it('selects a single state', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.click(screen.getByRole('option', { name: 'Alabama' }))
    expect(screen.getByRole('button', { name: /1 selected/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Alabama' })).toHaveAttribute('aria-selected', 'true')
  })

  it('selects multiple states', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.click(screen.getByRole('option', { name: 'Alabama' }))
    await user.click(screen.getByRole('option', { name: 'California' }))
    await user.click(screen.getByRole('option', { name: 'New York' }))
    expect(screen.getByRole('button', { name: /3 selected/i })).toBeInTheDocument()
  })

  it('deselects a state by clicking again', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.click(screen.getByRole('option', { name: 'Alabama' }))
    await user.click(screen.getByRole('option', { name: 'California' }))
    expect(screen.getByRole('button', { name: /2 selected/i })).toBeInTheDocument()
    await user.click(screen.getByRole('option', { name: 'Alabama' }))
    expect(screen.getByRole('button', { name: /1 selected/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Alabama' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })

  it('selects all states', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(screen.getByRole('button', { name: /5 selected/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /deselect all/i })).toBeInTheDocument()
  })

  it('deselects all states', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(screen.getByRole('button', { name: /5 selected/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /deselect all/i }))
    expect(screen.getByRole('button', { name: /none selected/i })).toBeInTheDocument()
  })

  it('filters states by search', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.type(screen.getByLabelText(/search states/i), 'New')
    expect(screen.getByRole('option', { name: 'New York' })).toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Alabama' })).not.toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Alaska' })).not.toBeInTheDocument()
  })

  it('shows no results for unmatched search', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.type(screen.getByLabelText(/search states/i), 'ZZZ')
    expect(screen.queryByRole('option', { name: 'Alabama' })).not.toBeInTheDocument()
    expect(screen.getByText('No states found')).toBeInTheDocument()
  })

  it('closes dropdown on outside click', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Multiselect states={TEST_STATES} />
        <button>Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes dropdown on Escape key', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('toggles dropdown open and closed', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    const trigger = screen.getByRole('button', { name: /none selected/i })
    await user.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('applies selected background to selected items', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.click(screen.getByRole('option', { name: 'Arizona' }))
    const option = screen.getByRole('option', { name: 'Arizona' })
    expect(option.className).toContain('bg-primary-50')
  })

  it('applies hover background to unselected items', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    const option = screen.getByRole('option', { name: 'Arizona' })
    expect(option.className).toContain('hover:bg-surface-hover')
  })

  it('renders with default 50 US states', async () => {
    const user = userEvent.setup()
    render(<Multiselect />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    expect(screen.getByRole('option', { name: 'Wyoming' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'California' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'New York' })).toBeInTheDocument()
  })

  it('focuses search input when dropdown opens', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    expect(screen.getByLabelText(/search states/i)).toHaveFocus()
  })

  it('selects filtered states with select-all', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.type(screen.getByLabelText(/search states/i), 'New')
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(screen.getByRole('button', { name: /1 selected/i })).toBeInTheDocument()
  })

  it('deselects filtered states with deselect-all', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.type(screen.getByLabelText(/search states/i), 'New')
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(screen.getByRole('button', { name: /1 selected/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /deselect all/i }))
    expect(screen.getByRole('button', { name: /none selected/i })).toBeInTheDocument()
  })

  it('shows deselect-all when all filtered items are selected', async () => {
    const user = userEvent.setup()
    render(<Multiselect states={TEST_STATES} />)
    await user.click(screen.getByRole('button', { name: /none selected/i }))
    await user.type(screen.getByLabelText(/search states/i), 'New')
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(screen.queryByRole('button', { name: /^select all$/i })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /deselect all/i })).toBeInTheDocument()
  })
})
