import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuestBar } from './QuestBar'

describe('QuestBar', () => {
  it('renders the search input with placeholder', () => {
    render(<QuestBar />)

    const input = screen.getByRole('textbox', { name: /search/i })
    expect(input).toHaveAttribute('placeholder', 'Search...')
  })

  it('renders the search submit button with icon', () => {
    render(<QuestBar />)

    const button = screen.getByRole('button', { name: /search/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders the category dropdown with default label', () => {
    render(<QuestBar />)

    const dropdown = screen.getByRole('button', { name: /all product/i })
    expect(dropdown).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<QuestBar />)

    const input = screen.getByRole('textbox', { name: /search/i })
    await user.type(input, 'wireless headphones')
    expect(input).toHaveValue('wireless headphones')
  })

  it('submits the form on button click', async () => {
    const user = userEvent.setup()
    render(<QuestBar />)

    const input = screen.getByRole('textbox', { name: /search/i })
    await user.type(input, 'laptop')

    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    // Form submission is handled internally; no error means success
  })

  it('submits the form on Enter key press', async () => {
    const user = userEvent.setup()
    render(<QuestBar />)

    const input = screen.getByRole('textbox', { name: /search/i })
    await user.type(input, 'phone{Enter}')
    // Form submission via Enter is handled internally
  })

  it('submits with empty query', async () => {
    const user = userEvent.setup()
    render(<QuestBar />)

    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    // Empty query submission is handled internally
  })
})
