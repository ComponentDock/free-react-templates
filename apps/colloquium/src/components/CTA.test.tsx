import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders heading', () => {
    render(<CTA />)
    expect(screen.getByText('Book Your Tickets Now')).toBeInTheDocument()
  })

  it('renders registration form', () => {
    render(<CTA />)
    expect(screen.getByTestId('registration-form')).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Price')).toBeInTheDocument()
    expect(screen.getByText('Register Now')).toBeInTheDocument()
  })

  it('renders price select options', () => {
    render(<CTA />)
    const select = screen.getByLabelText('Select Price') as HTMLSelectElement
    expect(select.options).toHaveLength(4) // placeholder + 3 plans
    expect(select.options[1]?.textContent).toBe('Basic — $29/mo')
    expect(select.options[2]?.textContent).toBe('Standard — $49/mo')
    expect(select.options[3]?.textContent).toBe('Premium — $79/mo')
  })

  it('allows form input and phone field', async () => {
    const user = userEvent.setup()
    render(<CTA />)
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Phone Number'), '5551234567')
    expect(screen.getByLabelText('First Name')).toHaveValue('John')
    expect(screen.getByLabelText('Last Name')).toHaveValue('Doe')
    expect(screen.getByLabelText('Phone Number')).toHaveValue('5551234567')
  })

  it('allows price selection', async () => {
    const user = userEvent.setup()
    render(<CTA />)
    await user.selectOptions(screen.getByLabelText('Select Price'), 'standard')
    expect(screen.getByLabelText('Select Price')).toHaveValue('standard')
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<CTA />)
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.click(screen.getByText('Register Now'))
  })
})
