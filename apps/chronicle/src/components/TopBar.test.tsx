import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TopBar } from './TopBar'
import { searchPlaceholder, siteName } from '../data'

describe('TopBar', () => {
  it('renders the sign-in link, wordmark and search toggle', () => {
    render(<TopBar onMenuToggle={vi.fn()} />)
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /open search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('expands the search input and keeps the query on submit', async () => {
    const user = userEvent.setup()
    render(<TopBar onMenuToggle={vi.fn()} />)
    await user.click(screen.getByRole('button', { name: /open search/i }))
    const input = screen.getByRole('searchbox', { name: /search/i })
    expect(input).toHaveAttribute('placeholder', searchPlaceholder)
    await user.type(input, 'mountains')
    await user.keyboard('{Enter}')
    expect(input).toHaveValue('mountains')
  })

  it('calls onMenuToggle when the burger is clicked', async () => {
    const user = userEvent.setup()
    const onMenuToggle = vi.fn()
    render(<TopBar onMenuToggle={onMenuToggle} />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(onMenuToggle).toHaveBeenCalledTimes(1)
  })
})
