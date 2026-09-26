import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the newsletter heading', () => {
    render(<Subscribe />)
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Subscribe our newsletter and get latest update')).toBeInTheDocument()
  })

  it('renders the resume link', () => {
    render(<Subscribe />)
    expect(screen.getByText('Read my resume here')).toBeInTheDocument()
  })

  it('renders the email input and subscribe button', () => {
    render(<Subscribe />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByText('Subscribe Now')).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('clears the email input on form submission', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe Now'))
    expect(input).toHaveValue('')
  })
})
