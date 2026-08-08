import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Calculator } from './Calculator'

describe('Calculator', () => {
  it('renders the heading, form controls and calculate button', () => {
    render(<Calculator />)
    expect(screen.getByText('Savings')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'See How Much You Could Save' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Coverage Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Current Monthly Premium ($)')).toBeInTheDocument()
    expect(screen.getByLabelText('Age Range')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Calculate Savings' })).toBeInTheDocument()
  })

  it('shows a validation error for an empty premium and no estimate', async () => {
    const user = userEvent.setup()
    render(<Calculator />)
    await user.click(screen.getByRole('button', { name: 'Calculate Savings' }))
    expect(screen.getByText('Please enter your current monthly premium.')).toBeInTheDocument()
    expect(screen.queryByText(/Estimated Annual Savings/)).not.toBeInTheDocument()
  })

  it('reveals an estimated annual savings value on a valid submission', async () => {
    const user = userEvent.setup()
    render(<Calculator />)
    await user.type(screen.getByLabelText('Current Monthly Premium ($)'), '150')
    await user.click(screen.getByRole('button', { name: 'Calculate Savings' }))
    expect(screen.getByText('Estimated Annual Savings')).toBeInTheDocument()
    expect(screen.getByText('Up to $360/year')).toBeInTheDocument()
    expect(screen.getByText(/\*Estimates are for illustration only/)).toBeInTheDocument()
  })
})
