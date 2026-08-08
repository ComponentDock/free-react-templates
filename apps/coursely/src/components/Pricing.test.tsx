import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading, toggle and three tiers', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Choose Your Learning Path' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Save 20%')).toBeInTheDocument()
    expect(screen.getByText('Most Popular')).toBeInTheDocument()

    for (const tier of ['Free', 'Pro', 'Team']) {
      expect(screen.getByRole('heading', { level: 3, name: tier })).toBeInTheDocument()
    }

    expect(screen.getByText('Save $58/year')).toBeInTheDocument()
    expect(screen.getByText('Save $118/year')).toBeInTheDocument()
  })

  it('shows monthly prices by default', () => {
    render(<Pricing />)

    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getAllByText('/mo', { exact: false })).toHaveLength(3)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
  })

  it('switches to yearly pricing when the billing toggle is flipped', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const toggle = screen.getByRole('switch', { name: 'Toggle yearly billing' })
    expect(toggle).toHaveAttribute('aria-checked', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByText('$232')).toBeInTheDocument()
    expect(screen.getByText('$392')).toBeInTheDocument()
    // 3 price suffixes + the two "Save $X/year" badges
    expect(screen.getAllByText('/year', { exact: false })).toHaveLength(5)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByText('$29')).toBeInTheDocument()
  })
})
