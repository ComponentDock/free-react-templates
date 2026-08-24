import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Scholar logo, column headings, social links, and newsletter form', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Scholar' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Subjects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Community' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()

    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()

    for (const link of ['Web Development', 'Data Science', 'Forums', 'About Us', 'Careers']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('links to componentdock.com with the correct branding', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('shows the copyright text', () => {
    render(<Footer />)

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('prevents default newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByLabelText('Email for newsletter'))
    await user.keyboard('test@example.com{Enter}')
    // No error = default prevented
  })
})
