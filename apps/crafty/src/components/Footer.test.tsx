import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders all footer sections', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Agency' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('submits the newsletter form and clears the email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /get started/i }))

    expect(input).toHaveValue('')
  })

  it('shows the current year in the copyright', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Behance' })).toBeInTheDocument()
  })
})
