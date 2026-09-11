import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the BuildWell logo', () => {
    render(<Footer />)
    expect(screen.getByText('BuildWell')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Services', 'Portfolio', 'Blog']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('120 875 4578')).toBeInTheDocument()
    expect(screen.getByText('company@support.com')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('shows error for invalid email in footer newsletter', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText(/Your Email Address/), 'bad')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('subscribes with valid email in footer newsletter', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText(/Your Email Address/), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
  })

  it('clears error on valid resubmit in footer', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText(/Your Email Address/), 'bad')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.clear(screen.getByLabelText(/Your Email Address/))
    await user.type(screen.getByLabelText(/Your Email Address/), 'good@email.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
  })
})
