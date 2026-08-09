import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading and three plans', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Flexible Plans for Every Team' }),
    ).toBeInTheDocument()

    for (const plan of ['Hot Desk', 'Dedicated Desk', 'Private Office']) {
      expect(screen.getByRole('heading', { level: 3, name: plan })).toBeInTheDocument()
    }
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(3)
  })

  it('shows monthly prices by default', () => {
    render(<Pricing />)

    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$349')).toBeInTheDocument()
    expect(screen.getByText('$799')).toBeInTheDocument()
  })

  it('switches to annual prices when the Annual toggle is pressed', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const annualButton = screen.getByRole('button', { name: 'Annual' })
    expect(annualButton).toHaveAttribute('aria-pressed', 'false')

    await user.click(annualButton)

    expect(annualButton).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('$159')).toBeInTheDocument()
    expect(screen.getByText('$279')).toBeInTheDocument()
    expect(screen.getByText('$639')).toBeInTheDocument()
    expect(screen.getAllByText(/billed annually/)).toHaveLength(3)

    await user.click(screen.getByRole('button', { name: 'Monthly' }))
    expect(screen.getByText('$199')).toBeInTheDocument()
  })
})
