import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Estimate } from './Estimate'

describe('Estimate', () => {
  it('renders the intro copy, the quote form and the location cards', () => {
    render(<Estimate />)
    expect(screen.getByRole('heading', { name: 'Get free Estimate' })).toBeInTheDocument()
    expect(screen.getByLabelText('Product type')).toHaveValue('standard')
    expect(screen.getByLabelText('Product size')).toHaveValue('M')
    expect(screen.getByLabelText('City of departure')).toHaveValue('NewYork')
    expect(screen.getByLabelText('City of delivery')).toHaveValue('Boston')
    expect(screen.getByRole('link', { name: /\+10 672 457 356/i })).toHaveAttribute(
      'href',
      'tel:+10672457356',
    )
    expect(screen.getByText('support@cargonaut.com')).toBeInTheDocument()
  })

  it('blocks the request when the name and number are missing', async () => {
    const user = userEvent.setup()
    render(<Estimate />)

    await user.click(screen.getByRole('button', { name: 'Send Estimate' }))
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Add your name and a contact number so we can send the estimate.',
    )
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('accepts the request once the contact details are filled in', async () => {
    const user = userEvent.setup()
    render(<Estimate />)

    await user.selectOptions(screen.getByLabelText('Product type'), 'high')
    await user.selectOptions(screen.getByLabelText('Product size'), 'L')
    await user.selectOptions(screen.getByLabelText('City of departure'), 'Chicago')
    await user.selectOptions(screen.getByLabelText('City of delivery'), 'Seattle')
    await user.type(screen.getByLabelText('Name'), 'Rae Doyle')
    await user.type(screen.getByLabelText('Contact number'), '5550100')
    await user.click(screen.getByRole('button', { name: 'Send Estimate' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks Rae Doyle — your estimate is on its way to 5550100.',
    )
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Product type')).toHaveValue('high')
    expect(screen.getByLabelText('City of delivery')).toHaveValue('Seattle')
  })

  it('requires a contact number even when the name is given', async () => {
    const user = userEvent.setup()
    render(<Estimate />)

    await user.type(screen.getByLabelText('Name'), 'Rae Doyle')
    await user.click(screen.getByRole('button', { name: 'Send Estimate' }))

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('requires a name even when the number is given', async () => {
    const user = userEvent.setup()
    render(<Estimate />)

    await user.type(screen.getByLabelText('Contact number'), '5550100')
    await user.click(screen.getByRole('button', { name: 'Send Estimate' }))

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
