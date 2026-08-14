import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the newsletter block with email input and subscribe button', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Subscribe Now' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('confirms subscription on valid submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'a@b.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Subscribed/i)
  })

  it('does not confirm an empty submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders social icon links with accessible labels', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: "Let's Get Social" })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Linkedin' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders four link columns with headings and links', () => {
    render(<Footer />)
    for (const heading of ['About Us', 'Our Plans', 'Admissions', 'Support']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Online Learning' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Free Trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Online Application' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Site Feedback' })).toBeInTheDocument()
  })

  it('links the bottom bar to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
  })
})
