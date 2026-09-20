import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders email and phone contact info', () => {
    render(<TopBar />)

    expect(screen.getByText('info@learnpath.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders search input and submit button', () => {
    render(<TopBar />)

    expect(screen.getByLabelText('Search courses')).toBeInTheDocument()
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('renders Register and Login links', () => {
    render(<TopBar />)

    expect(screen.getByRole('link', { name: 'Register' })).toHaveAttribute('href', '#register')
    expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', '#login')
  })

  it('links email and phone have correct hrefs', () => {
    render(<TopBar />)

    const emailLink = screen.getByText('info@learnpath.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@learnpath.com')

    const phoneLink = screen.getByText('+1 (555) 123-4567').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:+15551234567')
  })

  it('form submission does not navigate', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<TopBar />)

    const input = screen.getByLabelText('Search courses')
    await user.type(input, 'react')
    await user.click(screen.getByLabelText('Search'))
    // onSubmit calls preventDefault - no navigation occurs
    expect(input).toHaveValue('react')
  })
})
