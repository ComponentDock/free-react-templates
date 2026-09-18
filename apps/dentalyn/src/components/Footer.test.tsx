import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows contact info, hours, quick links, and newsletter', () => {
    render(<Footer />)

    expect(screen.getByText('Dentalyn')).toBeInTheDocument()
    expect(screen.getByText(/28 Jackson Street, Chicago/)).toBeInTheDocument()
    expect(screen.getByText('+84. 2252. 2250. 122')).toBeInTheDocument()
    expect(screen.getByText('info.dentalyn@gmail.com')).toBeInTheDocument()

    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    expect(screen.getByText('Mon-Wed')).toBeInTheDocument()
    expect(screen.getByText('8:00 - 18:00')).toBeInTheDocument()

    expect(screen.getByText('Quick Link')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()

    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('allows typing in newsletter email and submitting', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const emailInput = screen.getByLabelText('Email Address')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    // Email is cleared after submit
    expect(emailInput).toHaveValue('')
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
  })
})
