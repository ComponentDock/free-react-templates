import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders the label, percentage and fill width', () => {
    const { container } = render(<ProgressBar value={65} label="Gifts into Service" />)
    expect(screen.getByText('Gifts into Service')).toBeInTheDocument()
    expect(screen.getByText('65%')).toBeInTheDocument()
    const fill = container.querySelector('[data-testid="progress-fill"]')
    expect(fill).toHaveStyle('width: 65%')
    expect(fill).toHaveClass('bg-brand')
  })

  it('renders without a label when omitted', () => {
    const { container } = render(<ProgressBar value={40} />)
    expect(screen.getByText('40%')).toBeInTheDocument()
    expect(container.querySelectorAll('span').length).toBe(1)
  })
})
