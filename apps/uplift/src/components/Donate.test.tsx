import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Donate } from './Donate'

describe('Donate', () => {
  it('shows the heading, amount chips and trust badges', () => {
    render(<Donate />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Every Dollar Makes a Difference' }),
    ).toBeInTheDocument()

    const group = screen.getByRole('group', { name: 'Donation amount' })
    expect(group).toBeInTheDocument()
    for (const amount of ['$25', '$50', '$100', '$250', 'Custom']) {
      expect(screen.getByRole('button', { name: amount })).toBeInTheDocument()
    }

    expect(screen.getByText('100% Tax Deductible')).toBeInTheDocument()
    expect(screen.getByText('Charity Navigator 4-Star')).toBeInTheDocument()
  })

  it('preselects $50 and updates the CTA when another amount is chosen', async () => {
    const user = userEvent.setup()
    render(<Donate />)

    expect(screen.getByRole('button', { name: '$50' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('link', { name: /Donate \$50/ })).toHaveAttribute(
      'href',
      'mailto:donate@uplift.org?subject=Donation',
    )

    await user.click(screen.getByRole('button', { name: '$100' }))
    expect(screen.getByRole('button', { name: '$100' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: '$50' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('link', { name: /Donate \$100/ })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Custom' }))
    expect(screen.getByRole('link', { name: /Donate Custom/ })).toBeInTheDocument()
  })
})
