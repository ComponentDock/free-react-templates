import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading, six category tabs, and three price rows', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Our Pricing' })).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(6)
    for (const row of ['Hair Cut', 'Hair Style', 'Shaving']) {
      expect(screen.getByText(row)).toBeInTheDocument()
    }
    expect(screen.getAllByText('$8')).toHaveLength(3)
  })

  it('moves the active tab when another tab is selected', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')

    await user.click(tabs[1]!)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
  })
})
