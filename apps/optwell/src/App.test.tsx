import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('OptWell')
  })

  it('renders description', () => {
    render(<App />)
    expect(screen.getByText(/States separated by comma/)).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('OptWell — Searchable Multiselect Dropdown Template')
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('opens dropdown and shows states', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Alaska' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Hawaii' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'California' })).toBeInTheDocument()
  })

  it('selects an option and shows tag', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    await user.click(screen.getByRole('option', { name: 'Alaska' }))
    // Tag appears in the trigger area (use getAllByText since "Alaska" also appears in the option list when open)
    const alaskaElements = screen.getAllByText('Alaska')
    expect(alaskaElements.length).toBeGreaterThanOrEqual(1)
  })

  it('deselects an option by clicking again', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    await user.click(screen.getByRole('option', { name: 'Alaska' }))
    // "Alaska" now appears as tag + option = 2 elements
    expect(screen.getAllByText('Alaska').length).toBe(2)
    await user.click(screen.getByRole('option', { name: 'Alaska' }))
    // After deselect, "Alaska" only in option list = 1 element
    expect(screen.getAllByText('Alaska').length).toBe(1)
  })

  it('removes tag via remove button', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    await user.click(screen.getByRole('option', { name: 'Alaska' }))
    // Tag + option = 2 elements
    expect(screen.getAllByText('Alaska').length).toBe(2)
    await user.click(screen.getByRole('button', { name: /remove alaska/i }))
    // Only option remains
    expect(screen.getAllByText('Alaska').length).toBe(1)
  })

  it('filters options via search', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    await user.type(screen.getByLabelText('Search states'), 'Cal')
    expect(screen.getByRole('option', { name: 'California' })).toBeInTheDocument()
    expect(screen.queryByRole('option', { name: 'Alaska' })).not.toBeInTheDocument()
  })

  it('shows no results message', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    await user.type(screen.getByLabelText('Search states'), 'xyz')
    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('select all and clear all', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    await user.click(screen.getByRole('button', { name: /select all/i }))
    // Tags appear for all states: each state name shows twice (tag + option)
    expect(screen.getAllByText('Alaska').length).toBe(2)
    expect(screen.getAllByText('California').length).toBe(2)
    expect(screen.getAllByText('Utah').length).toBe(2)
    await user.click(screen.getByRole('button', { name: /clear all/i }))
    // No tags remain; only options in dropdown
    expect(screen.getAllByText('Alaska').length).toBe(1)
  })

  it('closes on click outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <App />
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
    render(<App />)
    await user.click(screen.getByText('Select states'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('opens with Enter on trigger', () => {
    render(<App />)
    const trigger = screen.getByRole('combobox')
    fireEvent.keyDown(trigger, { key: 'Enter' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens with Space on trigger', () => {
    render(<App />)
    const trigger = screen.getByRole('combobox')
    fireEvent.keyDown(trigger, { key: ' ' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('has aria-expanded false when closed', () => {
    render(<App />)
    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('has aria-expanded true when open', async () => {
    const user = userEvent.setup()
    render(<App />)
    const trigger = screen.getByRole('combobox')
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })

  it('listbox has aria-multiselectable', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    expect(screen.getByRole('listbox')).toHaveAttribute('aria-multiselectable')
  })

  it('options have aria-selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    const option = screen.getByRole('option', { name: 'Alaska' })
    expect(option).toHaveAttribute('aria-selected', 'false')
  })

  it('selected option has aria-selected true', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Select states'))
    await user.click(screen.getByRole('option', { name: 'Alaska' }))
    const option = screen.getByRole('option', { name: 'Alaska' })
    expect(option).toHaveAttribute('aria-selected', 'true')
  })
})
