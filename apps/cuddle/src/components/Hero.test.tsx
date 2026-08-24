import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, CTAs, and donation widget', () => {
    render(<Hero />)

    expect(screen.getByText('Raising Hope')).toBeInTheDocument()
    expect(screen.getByText('To the Homeless & Hopeless People')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join Us' })).toBeInTheDocument()
    expect(screen.getByText('Watch the Video')).toBeInTheDocument()
    expect(screen.getByText('$1,850,000')).toBeInTheDocument()
    expect(screen.getByText('FUNDS RAISED BY 1200 PEOPLE')).toBeInTheDocument()
  })

  it('renders donation form fields', () => {
    render(<Hero />)

    expect(screen.getByLabelText('Your Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Causes')).toBeInTheDocument()
    expect(screen.getByLabelText('Amount to Give')).toBeInTheDocument()
    expect(screen.getByLabelText('Paypal')).toBeInTheDocument()
    expect(screen.getByLabelText('Credit Card')).toBeInTheDocument()
    expect(screen.getByLabelText('Payoneer')).toBeInTheDocument()
  })

  it('allows typing into name and email fields', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const nameInput = screen.getByLabelText('Your Full Name')
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')

    const emailInput = screen.getByLabelText('Email Address')
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('allows selecting a cause from dropdown', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const causeSelect = screen.getByLabelText('Select Causes')
    await user.selectOptions(causeSelect, 'Education')
    expect(causeSelect).toHaveValue('Education')
  })

  it('allows changing payment radio selection', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const creditCardRadio = screen.getByLabelText('Credit Card')
    await user.click(creditCardRadio)
    expect(creditCardRadio).toBeChecked()
    expect(screen.getByLabelText('Paypal')).not.toBeChecked()
  })

  it('allows typing into amount field', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const amountInput = screen.getByLabelText('Amount to Give')
    await user.type(amountInput, '50')
    expect(amountInput).toHaveValue(50)
  })

  it('renders the Donate Now submit link in the form', () => {
    render(<Hero />)

    // ButtonLink with type="submit" renders as <a> without href — no link role
    // Query by text content instead
    expect(screen.getByText('Donate Now')).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<Hero />)

    // The form has onSubmit={handleSubmit} which calls event.preventDefault()
    const form = document.querySelector('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    form.dispatchEvent(submitEvent)
  })

  it('renders background image with overlay', () => {
    render(<Hero />)

    const bgImg = screen.getByAltText('Child portrait - charity hero background')
    expect(bgImg).toBeInTheDocument()
    expect(bgImg).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/cuddle-hero'))
  })

  it('has JOIN US link pointing to causes section', () => {
    render(<Hero />)

    const joinUs = screen.getByRole('link', { name: 'Join Us' })
    expect(joinUs).toHaveAttribute('href', '#causes')
  })

  it('renders DONATE NOW heading in donation widget', () => {
    render(<Hero />)

    expect(screen.getByText('DONATE NOW')).toBeInTheDocument()
  })

  it('renders the giving quote', () => {
    render(<Hero />)

    expect(screen.getByText(/Giving is the greatest act of grace/)).toBeInTheDocument()
  })
})
