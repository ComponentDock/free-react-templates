import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { footerNav, footerServices } from '../data'

describe('Footer', () => {
  it('renders the brand blurb and social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /^Meliora/ })).toBeInTheDocument()
    expect(screen.getByLabelText('Footer social links')).toBeInTheDocument()
  })

  it('renders the Navigation link column', () => {
    render(<Footer />)
    const nav = screen.getByRole('navigation', { name: 'Footer navigation' })
    for (const link of footerNav) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('renders the Services link column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    for (const item of footerServices) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('subscribes with a valid email and shows a success message', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'donor@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(/subscribed/i)
  })

  it('rejects an invalid email with an error message', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
