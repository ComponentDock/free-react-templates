import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Multi-Select #3')
  })

  it('renders instruction text', () => {
    render(<App />)
    expect(screen.getByText(/Names separate with comma/)).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('TealPick — Multiselect Dropdown Template')
  })

  it('opens dropdown and shows names', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Joefrey' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Robert' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Jorge' })).toBeInTheDocument()
  })

  it('selects an option and shows tag', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    await user.click(screen.getByRole('option', { name: 'Joefrey' }))
    expect(screen.getByRole('button', { name: /remove joefrey/i })).toBeInTheDocument()
  })

  it('deselects an option by clicking again', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    await user.click(screen.getByRole('option', { name: 'Joefrey' }))
    await user.click(screen.getByRole('option', { name: 'Joefrey' }))
    expect(screen.queryByRole('button', { name: /remove joefrey/i })).not.toBeInTheDocument()
  })

  it('removes tag via remove button', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    await user.click(screen.getByRole('option', { name: 'Joefrey' }))
    await user.click(screen.getByRole('button', { name: /remove joefrey/i }))
    expect(screen.queryByRole('button', { name: /remove joefrey/i })).not.toBeInTheDocument()
  })

  it('filters options via search', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    await user.type(screen.getByLabelText('Search names'), 'Rob')
    expect(screen.getByRole('option', { name: 'Robert' })).toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Joefrey' })).not.toBeInTheDocument()
  })

  it('shows no results message', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    await user.type(screen.getByLabelText('Search names'), 'xyz')
    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('select all and clear all', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(screen.getAllByText('Joefrey').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Robert').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Jorge').length).toBeGreaterThanOrEqual(1)
    await user.click(screen.getByRole('button', { name: /clear all/i }))
    expect(screen.queryByRole('button', { name: /remove joefrey/i })).not.toBeInTheDocument()
  })

  it('closes on click outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <App />
        <span>Outside</span>
      </div>,
    )
    await user.click(screen.getByText('Select names'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByText('Outside'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes on Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('listbox has aria-multiselectable', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    expect(screen.getByRole('listbox')).toHaveAttribute('aria-multiselectable', 'true')
  })

  it('options have aria-selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    const option = screen.getByRole('option', { name: 'Joefrey' })
    expect(option).toHaveAttribute('aria-selected', 'false')
  })

  it('selected option has aria-selected true', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select names'))
    await user.click(screen.getByRole('option', { name: 'Joefrey' }))
    const option = screen.getByRole('option', { name: 'Joefrey' })
    expect(option).toHaveAttribute('aria-selected', 'true')
  })
})
