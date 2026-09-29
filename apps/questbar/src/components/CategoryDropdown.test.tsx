import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CategoryDropdown } from './CategoryDropdown'

describe('CategoryDropdown', () => {
  const defaultProps = {
    selected: 'All Product',
    onSelect: vi.fn(),
  }

  it('renders the default category label', () => {
    render(<CategoryDropdown {...defaultProps} />)

    const button = screen.getByRole('button', { name: /all product/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the dropdown menu on click', async () => {
    const user = userEvent.setup()
    render(<CategoryDropdown {...defaultProps} />)

    const button = screen.getByRole('button', { name: /all product/i })
    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('displays all category options', async () => {
    const user = userEvent.setup()
    render(<CategoryDropdown {...defaultProps} />)

    await user.click(screen.getByRole('button', { name: /all product/i }))

    expect(screen.getByRole('option', { name: 'All Product' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Electronics' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Clothing' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Home & Garden' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Sports' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Books' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Toys' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Beauty' })).toBeInTheDocument()
  })

  it('calls onSelect when a category is selected', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    render(<CategoryDropdown {...defaultProps} onSelect={onSelect} />)

    await user.click(screen.getByRole('button', { name: /all product/i }))
    const option = screen.getByRole('option', { name: 'Electronics' })
    await user.click(within(option).getByRole('button'))

    expect(onSelect).toHaveBeenCalledWith('Electronics')
  })

  it('closes the dropdown after selection', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    render(<CategoryDropdown {...defaultProps} onSelect={onSelect} />)

    await user.click(screen.getByRole('button', { name: /all product/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    const option = screen.getByRole('option', { name: 'Electronics' })
    await user.click(within(option).getByRole('button'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('shows selected category as active', () => {
    render(<CategoryDropdown {...defaultProps} selected="Electronics" />)

    expect(screen.getByRole('button', { name: /electronics/i })).toBeInTheDocument()
  })

  it('closes the dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <CategoryDropdown {...defaultProps} />
        <button type="button">Outside</button>
      </div>,
    )

    await user.click(screen.getByRole('button', { name: /all product/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})
