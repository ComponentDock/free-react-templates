import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Quote } from './Quote'
import { QUOTE_TITLE, SENDER_TEXT, SENDER_TITLE, TRANSPORT_METHODS } from '../data'

const fieldLabels = ['Name', 'Email or phone', 'Departure', 'Arrival', 'Cargo Description']

describe('Quote', () => {
  it('renders the violet section with heading, six fields, and submit button', () => {
    const { container } = render(<Quote />)

    expect(screen.getByRole('heading', { name: QUOTE_TITLE })).toBeInTheDocument()
    for (const label of fieldLabels) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    const methodSelect = screen.getByLabelText('Transportation Method')
    for (const method of TRANSPORT_METHODS) {
      expect(screen.getByRole('option', { name: method })).toBeInTheDocument()
    }
    expect(methodSelect).toHaveValue('')
    expect(screen.getByRole('button', { name: 'GET A QUOTE' })).toBeInTheDocument()
    expect(container.querySelector('section')).toHaveClass('bg-brand')
  })

  it('renders the sender column with heading, text, and check-now link', () => {
    render(<Quote />)

    expect(screen.getByRole('heading', { name: SENDER_TITLE })).toBeInTheDocument()
    expect(screen.getByText(SENDER_TEXT)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /check now/ })).toBeInTheDocument()
  })

  it('blocks submission and shows per-field errors for an invalid form', async () => {
    const user = userEvent.setup()
    render(<Quote />)

    await user.click(screen.getByRole('button', { name: 'GET A QUOTE' }))

    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter an email or phone number')).toBeInTheDocument()
    expect(screen.getByText('Please enter a departure city')).toBeInTheDocument()
    expect(screen.getByText('Please enter an arrival city')).toBeInTheDocument()
    expect(screen.getByText('Please describe your cargo')).toBeInTheDocument()
    expect(screen.getByText('Please select a transportation method')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid form and shows the confirmation', async () => {
    const user = userEvent.setup()
    render(<Quote />)

    await user.type(screen.getByLabelText('Name'), 'Ada')
    await user.type(screen.getByLabelText('Email or phone'), 'ada@cargoly.com')
    await user.type(screen.getByLabelText('Departure'), 'Berlin')
    await user.type(screen.getByLabelText('Arrival'), 'Paris')
    await user.type(screen.getByLabelText('Cargo Description'), 'Two pallets of machine parts')
    await user.selectOptions(screen.getByLabelText('Transportation Method'), 'Road')

    await user.click(screen.getByRole('button', { name: 'GET A QUOTE' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      "Thanks Ada! We'll email you a quote for Berlin → Paris.",
    )
    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })

  it('drops resolved field errors but keeps the still-invalid method error', async () => {
    const user = userEvent.setup()
    render(<Quote />)

    await user.type(screen.getByLabelText('Name'), 'Ada')
    await user.type(screen.getByLabelText('Email or phone'), 'ada@cargoly.com')
    await user.type(screen.getByLabelText('Departure'), 'Berlin')
    await user.type(screen.getByLabelText('Arrival'), 'Paris')
    await user.type(screen.getByLabelText('Cargo Description'), 'Two pallets of machine parts')

    await user.click(screen.getByRole('button', { name: 'GET A QUOTE' }))

    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
    expect(screen.getByText('Please select a transportation method')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
