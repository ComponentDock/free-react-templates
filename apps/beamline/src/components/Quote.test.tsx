import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Quote } from './Quote'

describe('Quote', () => {
  it('shows the form heading and service selector options', () => {
    render(<Quote />)

    expect(screen.getByRole('heading', { level: 3, name: 'Request A Quote' })).toBeInTheDocument()
    const select = screen.getByRole('combobox', { name: /services/i })
    for (const option of ['Construction', 'Renovation', 'Interior Design']) {
      expect(within(select).getByRole('option', { name: option })).toBeInTheDocument()
    }
  })

  it('does not navigate on submit', async () => {
    const user = userEvent.setup()
    render(<Quote />)

    await user.click(screen.getByRole('button', { name: 'Request A Quote' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Request A Quote' })).toBeInTheDocument()
  })

  it('updates the controlled inputs as the user types', async () => {
    const user = userEvent.setup()
    render(<Quote />)

    const firstName = screen.getByRole('textbox', { name: 'First Name' })
    const lastName = screen.getByRole('textbox', { name: 'Last Name' })
    const phone = screen.getByRole('textbox', { name: 'Phone' })
    const message = screen.getByRole('textbox', { name: 'Message' })

    await user.type(firstName, 'Ada')
    await user.type(lastName, 'Lovelace')
    await user.type(phone, '+1 555 0100')
    await user.type(message, 'Interested in a renovation quote.')

    expect(firstName).toHaveValue('Ada')
    expect(lastName).toHaveValue('Lovelace')
    expect(phone).toHaveValue('+1 555 0100')
    expect(message).toHaveValue('Interested in a renovation quote.')
  })

  it('selects a service from the dropdown', async () => {
    const user = userEvent.setup()
    render(<Quote />)

    const select = screen.getByRole('combobox', { name: /services/i })
    await user.selectOptions(select, 'Renovation')
    expect(select).toHaveValue('Renovation')
  })

  it('shows the about column with the site name', () => {
    render(<Quote />)

    expect(screen.getByRole('heading', { level: 2, name: 'Beamline' })).toBeInTheDocument()
    expect(screen.getByText(/small river named Duden/)).toBeInTheDocument()
  })
})
