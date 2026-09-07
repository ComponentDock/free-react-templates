import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step2ContactInfo } from './Step2ContactInfo'

describe('Step2ContactInfo', () => {
  it('renders email and phone fields', () => {
    render(<Step2ContactInfo />)
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
  })

  it('renders city and pincode fields', () => {
    render(<Step2ContactInfo />)
    expect(screen.getByLabelText('City')).toBeInTheDocument()
    expect(screen.getByLabelText('Pincode')).toBeInTheDocument()
  })

  it('allows typing in email', async () => {
    const user = userEvent.setup()
    render(<Step2ContactInfo />)
    const input = screen.getByLabelText('Your Email')
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('allows typing in phone', async () => {
    const user = userEvent.setup()
    render(<Step2ContactInfo />)
    const input = screen.getByLabelText('Phone Number')
    await user.type(input, '1234567890')
    expect(input).toHaveValue('1234567890')
  })

  it('prevents default form submission', () => {
    render(<Step2ContactInfo />)
    const form = screen.getByLabelText('Your Email').closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
