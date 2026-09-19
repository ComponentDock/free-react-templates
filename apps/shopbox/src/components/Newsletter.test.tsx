import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders section heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Subscribe to Our Newsletter',
    )
  })

  it('renders subtext', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Stay updated with our latest/)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('accepts email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('shows thank you on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument()
  })

  it('hides form after successful submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('has light background', () => {
    render(<Newsletter />)
    const section = screen.getByRole('heading', { level: 2 }).closest('section')!
    expect(section.className).toContain('bg-gray-50')
  })

  it('form has aria-label', () => {
    render(<Newsletter />)
    expect(screen.getByRole('form', { name: 'Newsletter signup' })).toBeInTheDocument()
  })

  it('email input is not required', () => {
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    expect(input).not.toBeRequired()
  })

  it('does not submit with empty email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByText('Subscribe'))
    expect(screen.queryByText('Thank you for subscribing!')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })
})
