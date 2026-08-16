import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('sits on a yellow background with the headphones icon and heading', () => {
    const { container } = render(<CallToAction />)
    expect(screen.getByRole('heading', { name: /Get Free Phone Call/i })).toBeInTheDocument()
    expect(screen.getByText(/We could vary snack and coffee breaks/i)).toBeInTheDocument()
    expect(container.querySelector('.bg-accent')).not.toBeNull()
  })

  it('shows a phone input, services select and Send Request button', () => {
    render(<CallToAction />)
    expect(screen.getByLabelText(/Your phone number/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Select a service' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Commercial Cleaning' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Request' })).toHaveClass('btn-outline-navy')
  })

  it('submits the request with the chosen service', async () => {
    const user = userEvent.setup()
    render(<CallToAction />)
    await user.type(screen.getByLabelText(/Your phone number/i), '555-0100')
    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Select a service' }),
      'residential',
    )
    await user.click(screen.getByRole('button', { name: 'Send Request' }))
    expect(screen.getByText(/Thanks! We will call you back/i)).toBeInTheDocument()
  })

  it('blocks submission without a phone number', async () => {
    const user = userEvent.setup()
    render(<CallToAction />)
    await user.click(screen.getByRole('button', { name: 'Send Request' }))
    expect(screen.getByText(/Please enter your phone number/i)).toBeInTheDocument()
  })
})
