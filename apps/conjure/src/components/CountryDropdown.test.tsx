import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CountryDropdown } from './CountryDropdown'

describe('CountryDropdown', () => {
  it('shows "Your country" by default', () => {
    render(<CountryDropdown />)
    expect(screen.getByText('Your country')).toBeInTheDocument()
  })

  it('opens the dropdown list on click', async () => {
    const user = userEvent.setup()
    render(<CountryDropdown />)
    await user.click(screen.getByRole('button', { name: /your country/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'United States' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'United Kingdom' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Viet Nam' })).toBeInTheDocument()
  })

  it('selects an option and closes the list', async () => {
    const user = userEvent.setup()
    render(<CountryDropdown />)
    await user.click(screen.getByRole('button', { name: /your country/i }))
    await user.click(screen.getByRole('option', { name: 'Viet Nam' }))
    expect(screen.getByText('Viet Nam')).toBeInTheDocument()
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <CountryDropdown />
        <span>Outside</span>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /your country/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByText('Outside'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('has aria-expanded attribute', async () => {
    const user = userEvent.setup()
    render(<CountryDropdown />)
    const btn = screen.getByRole('button', { name: /your country/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
