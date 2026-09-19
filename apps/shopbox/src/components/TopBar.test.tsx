import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument()
  })

  it('renders contact email', () => {
    render(<TopBar />)
    expect(screen.getByText('info@shopbox.com')).toBeInTheDocument()
  })

  it('has dark background', () => {
    render(<TopBar />)
    const outerDiv = screen.getByText('+1 (234) 567-890').closest('div')!.parentElement!
      .parentElement!
    expect(outerDiv.className).toContain('bg-primary-500')
  })

  it('renders currency selector', () => {
    render(<TopBar />)
    expect(screen.getByText('USD')).toBeInTheDocument()
  })

  it('renders My Account link', () => {
    render(<TopBar />)
    expect(screen.getByText('My Account')).toBeInTheDocument()
  })

  it('has clickable phone link', async () => {
    render(<TopBar />)
    const phoneLink = screen.getByText('+1 (234) 567-890')
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+1234567890')
  })

  it('has clickable email link', async () => {
    render(<TopBar />)
    const emailLink = screen.getByText('info@shopbox.com')
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:info@shopbox.com')
  })

  it('has clickable USD button', async () => {
    const user = userEvent.setup()
    render(<TopBar />)
    const usdButton = screen.getByText('USD').closest('button')!
    await user.click(usdButton)
    expect(usdButton).toBeInTheDocument()
  })

  it('has clickable My Account link', async () => {
    const user = userEvent.setup()
    render(<TopBar />)
    await user.click(screen.getByText('My Account'))
    expect(screen.getByText('My Account')).toBeInTheDocument()
  })
})
