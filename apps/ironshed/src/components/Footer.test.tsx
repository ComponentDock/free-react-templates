import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the contact form with all fields', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Request A Call Back' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /subject/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('renders the map iframe', () => {
    render(<Footer />)
    expect(screen.getByTitle('Location map')).toBeInTheDocument()
  })

  it('renders footer links and social icons', () => {
    render(<Footer />)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms Of Service')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} IronShed`)),
    ).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('submits the contact form and clears all fields', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'John')
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'john@test.com')
    await user.type(screen.getByRole('textbox', { name: /subject/i }), 'Test')
    await user.type(screen.getByRole('textbox', { name: /message/i }), 'Hello')

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByRole('textbox', { name: /name/i })).toHaveValue('')
    expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue('')
    expect(screen.getByRole('textbox', { name: /subject/i })).toHaveValue('')
    expect(screen.getByRole('textbox', { name: /message/i })).toHaveValue('')
  })
})
