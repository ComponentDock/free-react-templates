import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the contact form with name, email, message fields and submit button', () => {
    render(<Footer />)

    expect(screen.getByText('Contact us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Got a Question/ })).toBeInTheDocument()

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Email/ })).toBeInTheDocument()
  })

  it('renders address, phone, and email info', () => {
    render(<Footer />)

    expect(screen.getByText(/333 Middle Winchendon Rd/)).toBeInTheDocument()
    expect(screen.getByText('125-711-811')).toBeInTheDocument()
    expect(screen.getByText('125-668-886')).toBeInTheDocument()
    expect(screen.getByText('support@groove.music')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the Component Dock link in copyright', () => {
    render(<Footer />)

    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('clears form fields on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const nameInput = screen.getByLabelText('Name')
    const emailInput = screen.getByLabelText('Email')
    const messageInput = screen.getByLabelText('Message')

    await user.type(nameInput, 'Test User')
    await user.type(emailInput, 'test@example.com')
    await user.type(messageInput, 'Hello!')

    expect(nameInput).toHaveValue('Test User')
    expect(emailInput).toHaveValue('test@example.com')
    expect(messageInput).toHaveValue('Hello!')

    await user.click(screen.getByRole('button', { name: /Send Email/ }))

    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
  })

  it('renders the footer image', () => {
    render(<Footer />)

    const img = screen.getByRole('img', { name: /concert venue/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
