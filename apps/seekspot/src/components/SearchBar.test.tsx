import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders the title heading', () => {
    render(<SearchBar />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Search Form\/Bar/)
  })

  it('renders the search input with placeholder text', () => {
    render(<SearchBar />)
    const input = screen.getByRole('textbox', { name: /search/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Search...')
  })

  it('renders the circular clear button with X icon', () => {
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /clear search/i })
    expect(button).toBeInTheDocument()
  })

  it('allows typing into the search input', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const input = screen.getByRole('textbox', { name: /search/i })

    await user.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })

  it('clears the input when the clear button is clicked', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const input = screen.getByRole('textbox', { name: /search/i })

    await user.type(input, 'hello')
    expect(input).toHaveValue('hello')

    await user.click(screen.getByRole('button', { name: /clear search/i }))
    expect(input).toHaveValue('')
  })

  it('clears the input with keyboard (Enter on button)', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const input = screen.getByRole('textbox', { name: /search/i })

    await user.type(input, 'test')
    expect(input).toHaveValue('test')

    const button = screen.getByRole('button', { name: /clear search/i })
    button.focus()
    await user.keyboard('{Enter}')
    expect(input).toHaveValue('')
  })
})
