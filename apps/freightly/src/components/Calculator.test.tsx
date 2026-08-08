import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Calculator } from './Calculator'

describe('Calculator', () => {
  it('renders the heading, options and calculate button', () => {
    render(<Calculator />)
    expect(
      screen.getByRole('heading', { name: 'Calculate Your Shipping Cost' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /Economy/ })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /Standard/ })).toBeInTheDocument()
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /Express/ })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /Same Day/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Calculate Shipping Cost' })).toBeInTheDocument()
  })

  it('shows no estimate when the destination is missing', async () => {
    const user = userEvent.setup()
    render(<Calculator />)
    await user.click(screen.getByRole('button', { name: 'Calculate Shipping Cost' }))
    expect(screen.queryByText('Estimated Total')).not.toBeInTheDocument()
  })

  it('shows an estimated total after choosing a destination and submitting', async () => {
    const user = userEvent.setup()
    render(<Calculator />)
    await user.selectOptions(screen.getByLabelText('Destination'), 'London, UK')
    await user.click(screen.getByRole('button', { name: 'Calculate Shipping Cost' }))
    expect(screen.getByText('Estimated Total')).toBeInTheDocument()
    // Standard option (default) multiplier 1.6 × base 120 = $192.00
    expect(screen.getByText('$192.00')).toBeInTheDocument()
  })

  it('updates the estimate when a different shipping speed is chosen', async () => {
    const user = userEvent.setup()
    render(<Calculator />)
    await user.selectOptions(screen.getByLabelText('Destination'), 'Singapore')
    await user.click(screen.getByRole('radio', { name: /Express/ }))
    await user.click(screen.getByRole('button', { name: 'Calculate Shipping Cost' }))
    // Express multiplier 2.4 × base 120 = $288.00
    expect(screen.getByText('$288.00')).toBeInTheDocument()
  })
})
