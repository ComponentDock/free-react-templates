import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BankAccount } from './BankAccount'

describe('BankAccount', () => {
  const defaultProps = {
    selectedBank: '',
    onBankSelect: vi.fn(),
    searchQuery: '',
    onSearchChange: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders heading and description', () => {
    render(<BankAccount {...defaultProps} />)
    expect(screen.getByText('Connect Bank Account', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText(/Find and connect your bank account/)).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<BankAccount {...defaultProps} />)
    expect(screen.getByLabelText('Find Your Bank')).toBeInTheDocument()
  })

  it('renders 6 bank options', () => {
    render(<BankAccount {...defaultProps} />)
    expect(screen.getByText('Chase')).toBeInTheDocument()
    expect(screen.getByText('Bank of America')).toBeInTheDocument()
    expect(screen.getByText('Wells Fargo')).toBeInTheDocument()
    expect(screen.getByText('Citibank')).toBeInTheDocument()
    expect(screen.getByText('Capital One')).toBeInTheDocument()
    expect(screen.getByText('US Bank')).toBeInTheDocument()
  })

  it('filters banks by search query', () => {
    render(<BankAccount {...defaultProps} searchQuery="Chase" />)
    expect(screen.getByText('Chase')).toBeInTheDocument()
    expect(screen.queryByText('Wells Fargo')).not.toBeInTheDocument()
  })

  it('calls onBankSelect when a bank is clicked', async () => {
    const user = userEvent.setup()
    render(<BankAccount {...defaultProps} />)
    await user.click(screen.getByText('Chase'))
    expect(defaultProps.onBankSelect).toHaveBeenCalledWith('bank1')
  })

  it('calls onSearchChange when typing in search', async () => {
    const user = userEvent.setup()
    render(<BankAccount {...defaultProps} />)
    await user.type(screen.getByLabelText('Find Your Bank'), 'Chase')
    expect(defaultProps.onSearchChange).toHaveBeenCalled()
  })

  it('highlights selected bank', () => {
    const { container } = render(<BankAccount {...defaultProps} selectedBank="bank1" />)
    const labels = container.querySelectorAll('label')
    const selectedLabel = Array.from(labels).find((l) => l.textContent?.includes('Chase'))
    expect(selectedLabel?.className).toContain('border-[var(--color-step-active)]')
  })
})
