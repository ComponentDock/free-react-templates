import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepTiles } from './StepTiles'

describe('StepTiles', () => {
  const defaultProps = {
    currentStep: 0,
    visitedSteps: new Set([0]),
    onTileClick: vi.fn(),
  }

  it('renders four tiles with correct labels', () => {
    render(<StepTiles {...defaultProps} />)
    expect(screen.getAllByRole('tab')).toHaveLength(4)
    expect(screen.getByRole('tab', { name: /personal/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /official/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /payment/i })).toBeInTheDocument()
  })

  it('highlights the current tile', () => {
    render(<StepTiles {...defaultProps} currentStep={1} visitedSteps={new Set([0, 1])} />)
    const contactTile = screen.getByRole('tab', { name: /contact/i })
    expect(contactTile).toHaveAttribute('aria-selected', 'true')
  })

  it('disables unvisited tiles', () => {
    render(<StepTiles {...defaultProps} currentStep={0} visitedSteps={new Set([0])} />)
    const paymentTile = screen.getByRole('tab', { name: /payment/i })
    expect(paymentTile).toHaveAttribute('aria-disabled', 'true')
    expect(paymentTile).toBeDisabled()
  })

  it('allows clicking visited tiles', async () => {
    const user = userEvent.setup()
    const onTileClick = vi.fn()
    render(
      <StepTiles currentStep={2} visitedSteps={new Set([0, 1, 2])} onTileClick={onTileClick} />,
    )
    await user.click(screen.getByRole('tab', { name: /personal/i }))
    expect(onTileClick).toHaveBeenCalledWith(0)
  })

  it('does not call onTileClick for disabled tiles', async () => {
    const user = userEvent.setup()
    const onTileClick = vi.fn()
    render(<StepTiles currentStep={0} visitedSteps={new Set([0])} onTileClick={onTileClick} />)
    await user.click(screen.getByRole('tab', { name: /payment/i }))
    expect(onTileClick).not.toHaveBeenCalled()
  })
})
