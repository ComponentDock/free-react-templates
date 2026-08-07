import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the heading and the three tabs', () => {
    render(<HowItWorks />)

    expect(screen.getByRole('heading', { level: 2, name: /How it works/i })).toBeInTheDocument()

    for (const tab of ['Next gen VPS', 'Performance', 'Effectiveness']) {
      expect(screen.getByRole('tab', { name: tab })).toBeInTheDocument()
    }
  })

  it('switches the active tab and updates the description', async () => {
    const user = userEvent.setup()
    render(<HowItWorks />)

    expect(screen.getByRole('tab', { name: 'Next gen VPS' })).toHaveAttribute(
      'aria-selected',
      'true',
    )

    await user.click(screen.getByRole('tab', { name: 'Performance' }))

    expect(screen.getByRole('tab', { name: 'Performance' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(
      screen.getByRole('heading', { level: 3, name: /Performance VPS hosting/i }),
    ).toBeInTheDocument()
  })
})
