import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the features heading and all 4 features', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: /Why Choose To Rent/ })).toBeInTheDocument()
    for (const title of [
      '24/7 Customer Service',
      'Prompt Delivery',
      'Reliable Equipment',
      'New Heavy Equipment',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders the quote request form', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: 'Request Quote' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit Request' })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const { container } = render(<Features />)
    const form = container.querySelector('form')
    const event = new Event('submit', { bubbles: true, cancelable: true })
    const prevented = !form?.dispatchEvent(event)
    expect(prevented).toBe(true)
  })
})
