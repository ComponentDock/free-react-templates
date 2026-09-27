import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FinancialGoals } from './FinancialGoals'

describe('FinancialGoals', () => {
  const defaultProps = {
    selectedPlan: '',
    onPlanSelect: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders heading and description', () => {
    render(<FinancialGoals {...defaultProps} />)
    expect(screen.getByText('Set Financial Goals', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText(/Choose a plan that aligns/)).toBeInTheDocument()
  })

  it('renders 3 plan options', () => {
    render(<FinancialGoals {...defaultProps} />)
    expect(screen.getByText('Specific')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Special')).toBeInTheDocument()
  })

  it('renders plan descriptions', () => {
    render(<FinancialGoals {...defaultProps} />)
    expect(screen.getByText(/Set a specific savings goal/)).toBeInTheDocument()
    expect(screen.getByText(/A balanced approach/)).toBeInTheDocument()
    expect(screen.getByText(/Premium investment plan/)).toBeInTheDocument()
  })

  it('calls onPlanSelect when a plan is clicked', async () => {
    const user = userEvent.setup()
    render(<FinancialGoals {...defaultProps} />)
    await user.click(screen.getByText('Specific'))
    expect(defaultProps.onPlanSelect).toHaveBeenCalledWith('specific')
  })

  it('highlights selected plan', () => {
    const { container } = render(<FinancialGoals {...defaultProps} selectedPlan="medium" />)
    const labels = container.querySelectorAll('label')
    const selectedLabel = Array.from(labels).find((l) => l.textContent?.includes('Medium'))
    expect(selectedLabel?.className).toContain('border-[var(--color-step-active)]')
  })

  it('does not highlight unselected plans', () => {
    const { container } = render(<FinancialGoals {...defaultProps} selectedPlan="medium" />)
    const labels = container.querySelectorAll('label')
    const unselectedLabel = Array.from(labels).find((l) => l.textContent?.includes('Specific'))
    expect(unselectedLabel?.className).toContain('border-[var(--color-border)]')
  })
})
