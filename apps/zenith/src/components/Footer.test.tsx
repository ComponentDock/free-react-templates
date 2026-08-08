import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /zenith home/i })).toBeInTheDocument()
    expect(screen.getByText(/the modern platform for scaling your business/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Zenith on Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Zenith on GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Zenith on LinkedIn' })).toBeInTheDocument()
  })

  it('renders the PRODUCT, COMPANY and LEGAL link columns', () => {
    render(<Footer />)
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Integrations' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Changelog' })).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Careers' })).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Security' })).toBeInTheDocument()
  })

  it('shows a newsletter form and confirms a subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    const subscribe = screen.getByRole('button', { name: 'Subscribe' })

    await user.type(input, 'ada@example.com')
    await user.click(subscribe)

    expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('shows the copyright and legal links', () => {
    render(<Footer />)
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })
})
