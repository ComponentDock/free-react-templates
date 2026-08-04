import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and the three plans with monthly prices and feature lists', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Choose Your Plan' })).toBeInTheDocument()

    for (const name of ['Starter', 'Professional', 'Premium']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText(/3 Dog Walks per week/)).toBeInTheDocument()
  })

  it('switches between monthly and yearly billing and updates the prices', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.queryByText('$23')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Yearly/i }))
    expect(screen.getByText('$23')).toBeInTheDocument()
    expect(screen.queryByText('$29')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Monthly/i }))
    expect(screen.getByText('$29')).toBeInTheDocument()
  })
})
