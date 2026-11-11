import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PricingHead } from './PricingHead'

describe('PricingHead', () => {
  it('renders the eyebrow, the only heading and the lede', () => {
    render(<PricingHead onExpandAll={() => {}} onCollapseAll={() => {}} />)

    expect(screen.getByText('Compare plans')).toHaveClass('pt-eyebrow')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Every Parity feature, side by side')
    expect(heading).toHaveAttribute('id', 'pt-title')

    expect(screen.getByText(/Plan headers stay pinned/)).toHaveClass('pt-lede')
  })

  it('calls the matching bulk setter for each control', async () => {
    const onExpandAll = vi.fn()
    const onCollapseAll = vi.fn()
    render(<PricingHead onExpandAll={onExpandAll} onCollapseAll={onCollapseAll} />)

    await userEvent.click(screen.getByRole('button', { name: 'Expand all' }))
    expect(onExpandAll).toHaveBeenCalledTimes(1)

    await userEvent.click(screen.getByRole('button', { name: 'Collapse all' }))
    expect(onCollapseAll).toHaveBeenCalledTimes(1)
  })

  it('renders both controls as real buttons', () => {
    render(<PricingHead onExpandAll={() => {}} onCollapseAll={() => {}} />)

    for (const button of screen.getAllByRole('button')) {
      expect(button).toHaveAttribute('type', 'button')
      expect(button).toHaveClass('pt-all')
    }
  })
})
