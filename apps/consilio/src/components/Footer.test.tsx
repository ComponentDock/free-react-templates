import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the wordmark, blurb, and newsletter form', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Consilio/ })).toBeInTheDocument()
    expect(screen.getByText(/Receive updates and latest news/)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument()
  })

  it('rejects an invalid email with a validation error', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success confirmation for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'client@example.com')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/)
  })

  it('shows contact info and the Location and Explore link columns', () => {
    render(<Footer />)

    expect(screen.getByText('+564 7885 3222')).toBeInTheDocument()
    expect(screen.getByText('youremail@gmail.com')).toBeInTheDocument()

    expect(screen.getByRole('navigation', { name: 'Location links' })).toBeInTheDocument()
    for (const link of ['Advanced', 'Management', 'Corporate', 'Customer', 'Information']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByRole('navigation', { name: 'Explore links' })).toBeInTheDocument()
    for (const link of ['Cookies', 'About', 'Privacy Policy', 'Proparties', 'Licenses']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows the copyright bar with the Component Dock link and social icons', () => {
    render(<Footer />)

    expect(screen.getByText(/Made with/)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')

    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Website')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
