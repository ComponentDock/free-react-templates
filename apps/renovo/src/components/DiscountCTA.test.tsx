import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DiscountCTA } from './DiscountCTA'

describe('DiscountCTA', () => {
  it('renders discount heading', () => {
    render(<DiscountCTA />)
    expect(screen.getByText('Enjoy 25% Seasonal Discount!')).toBeInTheDocument()
  })

  it('renders estimate form heading', () => {
    render(<DiscountCTA />)
    expect(screen.getByText('Get a free Estimate')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<DiscountCTA />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<DiscountCTA />)
    expect(screen.getByText('Get Estimate')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<DiscountCTA />)
    expect(screen.getByText('Order Service Now')).toBeInTheDocument()
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<DiscountCTA />)
    await user.type(screen.getByPlaceholderText('Your name'), 'John')
    await user.type(screen.getByPlaceholderText('Phone'), '123456')
    await user.type(screen.getByPlaceholderText('Email'), 'a@b.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    await user.click(screen.getByText('Get Estimate'))
  })
})
