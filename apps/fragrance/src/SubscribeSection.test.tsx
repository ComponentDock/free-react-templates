import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeSection } from './components/SubscribeSection'

describe('SubscribeSection', () => {
  it('renders heading "Get Update From Anywhere"', () => {
    render(<SubscribeSection />)
    expect(screen.getByRole('heading', { name: /get update from anywhere/i })).toBeInTheDocument()
  })

  it('renders email input with placeholder', () => {
    render(<SubscribeSection />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('renders Subscribe Now button', () => {
    render(<SubscribeSection />)
    expect(screen.getByText('Subscribe Now')).toBeInTheDocument()
  })

  it('clears email on form submit', async () => {
    const user = userEvent.setup()
    render(<SubscribeSection />)
    const input = screen.getByPlaceholderText('Enter your email')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe Now'))
    expect(input).toHaveValue('')
  })

  it('renders description text', () => {
    render(<SubscribeSection />)
    expect(screen.getByText(/subscribe to our newsletter/i)).toBeInTheDocument()
  })
})
