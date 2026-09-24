import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AboutEmail } from './AboutEmail'

describe('AboutEmail', () => {
  it('renders the heading', () => {
    render(<AboutEmail />)
    expect(screen.getByText('Amortization Computation')).toBeInTheDocument()
  })

  it('renders three benefit checkmarks', () => {
    render(<AboutEmail />)
    expect(screen.getByText(/Transparent fee structure/)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 online banking/)).toBeInTheDocument()
    expect(screen.getByText(/FDIC insured/)).toBeInTheDocument()
  })

  it('renders email signup form', async () => {
    const user = userEvent.setup()
    render(<AboutEmail />)
    const input = screen.getByPlaceholderText('Enter your email')
    expect(input).toBeInTheDocument()
    const button = screen.getByRole('button', { name: 'Submit Email' })
    expect(button).toBeInTheDocument()
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('allows form submission', async () => {
    const user = userEvent.setup()
    render(<AboutEmail />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'user@test.com')
    await user.click(screen.getByRole('button', { name: 'Submit Email' }))
  })
})
