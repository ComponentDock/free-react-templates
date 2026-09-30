import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { NewsletterSidebar } from './NewsletterSidebar'

describe('NewsletterSidebar', () => {
  it('renders the heading', () => {
    render(<NewsletterSidebar />)
    expect(
      screen.getByRole('heading', { name: /share your article to the world/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<NewsletterSidebar />)
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<NewsletterSidebar />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('renders the Sign Up button', () => {
    render(<NewsletterSidebar />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('has an accessible label', () => {
    render(<NewsletterSidebar />)
    expect(screen.getByLabelText(/newsletter signup sidebar/i)).toBeInTheDocument()
  })

  it('accepts email input', async () => {
    const user = userEvent.setup()
    render(<NewsletterSidebar />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'user@test.com')
    expect(input).toHaveValue('user@test.com')
  })

  it('has a required email field', () => {
    render(<NewsletterSidebar />)
    const input = screen.getByPlaceholderText('Enter your email')
    expect(input).toBeRequired()
  })

  it('has an associated label for the email input', () => {
    render(<NewsletterSidebar />)
    const input = screen.getByPlaceholderText('Enter your email')
    expect(input).toHaveAccessibleName()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<NewsletterSidebar />)
    const input = screen.getByPlaceholderText('Enter your email')
    const button = screen.getByRole('button', { name: /sign up/i })
    await user.type(input, 'test@example.com')
    await user.click(button)
    expect(input).toHaveValue('test@example.com')
  })

  it('applies custom className', () => {
    const { container } = render(<NewsletterSidebar className="custom-class" />)
    const aside = container.querySelector('aside')
    expect(aside).toHaveClass('custom-class')
  })
})
