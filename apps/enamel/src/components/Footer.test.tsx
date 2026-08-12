import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the four widget columns with links and opening hours', () => {
    render(<Footer />)

    expect(screen.getByText('Enamel')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )

    for (const item of ['Home', 'About', 'Services', 'Departments', 'Contact']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    for (const item of ['Neurology', 'Dentist', 'Ophthalmology', 'Cardiology', 'Surgery']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByText('We are open 24/7')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe Us!' })).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('rejects an invalid email and accepts a valid one', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('A valid email address is required.')
    expect(input).toHaveAttribute('aria-invalid', 'true')

    await user.clear(input)
    await user.type(input, 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
