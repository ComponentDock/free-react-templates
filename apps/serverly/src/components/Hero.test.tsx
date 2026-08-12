import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the server icon, headline, and search form', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Choose the perfect hosting',
    )
    expect(screen.getByPlaceholderText('Your domain name')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /domain extension/i })).toHaveTextContent('.com')
    // The form carries the selected extension for the query.
    const extensionInput = container.querySelector('input[name="extension"]')
    expect(extensionInput).not.toBeNull()
    expect(extensionInput).toHaveValue('.com')
  })

  it('lets the user pick an extension from the dropdown', async () => {
    const user = userEvent.setup()
    const { container } = render(<Hero />)

    const toggle = screen.getByRole('button', { name: /domain extension/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    await user.click(screen.getByRole('option', { name: '.io' }))
    expect(toggle).toHaveTextContent('.io')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('input[name="extension"]')).toHaveValue('.io')
  })

  it('submits the domain search without reloading the page', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const input = screen.getByPlaceholderText('Your domain name')
    await user.type(input, 'mysite')
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(input).toHaveValue('')
  })
})
