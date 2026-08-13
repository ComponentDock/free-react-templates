import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Quote } from './Quote'
import { quote } from '../data'

describe('Quote', () => {
  it('renders the tabs and the ten form fields in the visible pane', () => {
    render(<Quote />)

    expect(screen.getByText('Get a quote now!')).toBeInTheDocument()
    const estimationTab = screen.getByRole('tab', { name: 'Get an estimation' })
    const trackTab = screen.getByRole('tab', { name: 'Track Shipment' })
    expect(estimationTab).toHaveAttribute('aria-selected', 'true')
    expect(trackTab).toHaveAttribute('aria-selected', 'false')

    const panel = screen.getByRole('tabpanel', { name: 'Get an estimation' })
    for (const field of [
      'First name',
      'Last name',
      'Email Address',
      'Cargo Type',
      'Country of Origin',
      'Destination',
      'Quantity',
      'Weight',
      'Width',
      'Height',
    ]) {
      expect(within(panel).getByLabelText(field)).toBeInTheDocument()
    }
    expect(within(panel).getByRole('button', { name: 'Request a Quote' })).toBeInTheDocument()
  })

  it('switches tabs and keeps the same shared fields', async () => {
    const user = userEvent.setup()
    render(<Quote />)

    await user.click(screen.getByRole('tab', { name: 'Track Shipment' }))
    expect(screen.getByRole('tab', { name: 'Track Shipment' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    const panel = screen.getByRole('tabpanel', { name: 'Track Shipment' })
    expect(within(panel).getByLabelText('First name')).toBeInTheDocument()
    expect(within(panel).getByLabelText('Height')).toBeInTheDocument()
  })

  it('shows per-field errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<Quote />)

    const panel = screen.getByRole('tabpanel', { name: 'Get an estimation' })
    await user.click(within(panel).getByRole('button', { name: 'Request a Quote' }))

    expect(within(panel).getByText('Please enter your first name')).toBeInTheDocument()
    expect(within(panel).getByText('Please enter your email')).toBeInTheDocument()
    expect(within(panel).getByText('Please enter the height')).toBeInTheDocument()
  })

  it('submits a fully filled form and shows the success message', async () => {
    const user = userEvent.setup()
    render(<Quote />)

    const panel = screen.getByRole('tabpanel', { name: 'Get an estimation' })
    const fields: Record<string, string> = {
      'First name': 'Jane',
      'Last name': 'Doe',
      'Email Address': 'jane@example.com',
      'Cargo Type': 'Container',
      'Country of Origin': 'USA',
      Destination: 'Rotterdam',
      Quantity: '2',
      Weight: '1200',
      Width: '40',
      Height: '40',
    }
    for (const [label, value] of Object.entries(fields)) {
      await user.type(within(panel).getByLabelText(label), value)
    }
    await user.click(within(panel).getByRole('button', { name: 'Request a Quote' }))

    expect(within(panel).getByText(quote.success)).toBeInTheDocument()
  })
})
