import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading, three plans, the Most Popular badge, and plan CTAs', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Simple, Transparent Pricing/ }),
    ).toBeInTheDocument()
    for (const plan of ['Starter', 'Pro', 'Enterprise']) {
      expect(screen.getByRole('heading', { level: 3, name: plan })).toBeInTheDocument()
    }
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Started Free' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Start Free Trial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Contact Sales' })).toBeInTheDocument()
  })

  it('switches prices when yearly billing is selected', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    expect(screen.getByText('$29')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Yearly' }))
    expect(screen.getByText('$23')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Monthly' }))
    expect(screen.getByText('$29')).toBeInTheDocument()
  })
})
