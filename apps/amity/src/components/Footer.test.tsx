import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About column with brand and social links', () => {
    render(<Footer />)
    const aboutEl = screen.getByLabelText('About')
    const about = within(aboutEl)
    expect(aboutEl).toHaveTextContent('Amity')
    expect(aboutEl).toHaveTextContent(/non-profit/i)
    for (const name of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(about.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('renders the Useful Links column', () => {
    render(<Footer />)
    const column = within(screen.getByLabelText('Useful Links'))
    expect(column.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    for (const label of [
      'Privacy Polticy',
      'Become a Volunteer',
      'Donate',
      'Testimonials',
      'Causes',
      'Portfolio',
      'News',
    ]) {
      expect(column.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Latest News column with orange dates', () => {
    render(<Footer />)
    const column = within(screen.getByLabelText('Latest News'))
    expect(column.getByText('A new cause to help')).toBeInTheDocument()
    expect(column.getByText('We love to help people')).toBeInTheDocument()
    expect(column.getByText('The new ideas for helping')).toBeInTheDocument()
    const dates = column.getAllByText('March 12, 2018')
    expect(dates).toHaveLength(3)
    expect(dates[0]).toHaveClass('text-brand')
  })

  it('renders the Contact column with details and a subscribe form', () => {
    render(<Footer />)
    const columnEl = screen.getByLabelText('Contact')
    const column = within(columnEl)
    expect(columnEl).toHaveTextContent('+45 677 8993000 223')
    expect(columnEl).toHaveTextContent('office@template.com')
    expect(columnEl).toHaveTextContent('Main Str. no 45-46, b3, 56832, Los Angeles, CA')
    expect(column.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
    expect(column.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows a validation error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Enter a valid email address')
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
  })

  it('shows an error for an empty email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Enter a valid email address')
  })

  it('shows a success message for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'donor@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thank you/i)
    expect(screen.queryByRole('textbox', { name: 'Email address' })).not.toBeInTheDocument()
  })

  it('renders the copyright bar with the Component Dock link and no ColorLib credit', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Copyright © \d{4}/)).toBeInTheDocument()
    expect(screen.queryByText(/colorlib/i)).not.toBeInTheDocument()
  })
})
