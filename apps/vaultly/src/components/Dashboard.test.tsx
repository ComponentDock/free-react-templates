import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Dashboard } from './Dashboard'

describe('Dashboard', () => {
  it('renders the heading and the net worth figure', () => {
    render(<Dashboard />)

    expect(
      screen.getByRole('heading', { name: /Your Complete Financial Picture/ }),
    ).toBeInTheDocument()
    expect(screen.getByText('Total Net Worth')).toBeInTheDocument()
    expect(screen.getByText('$127,450.32')).toBeInTheDocument()
    expect(screen.getByText('+24.5%')).toBeInTheDocument()
  })

  it('renders the three tabs and activity rows', () => {
    render(<Dashboard />)

    for (const tab of ['Portfolio Allocation', 'Goals', 'Recent Activity']) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
    expect(screen.getByText('Portfolio Rebalanced')).toBeInTheDocument()
    expect(screen.getByText('VTI Dividend')).toBeInTheDocument()
  })
})
