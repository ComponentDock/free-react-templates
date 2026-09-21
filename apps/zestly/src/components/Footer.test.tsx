import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer columns, newsletter form, copyright, and social icons', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Top Products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Subscribe' })).toBeInTheDocument()

    expect(screen.getByText(/You can trust us/)).toBeInTheDocument()
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    expect(screen.getByText(/Component Dock/)).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('newsletter form prevents default submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email for newsletter')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')

    const submit = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(submit)
    // Form should not navigate (preventDefault)
    expect(input).toHaveValue('test@example.com')
  })
})
