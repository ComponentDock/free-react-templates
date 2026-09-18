import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('ReachForm — Contact Form Template')
  })

  it('renders the contact form heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('renders the Name input', () => {
    render(<App />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
  })

  it('renders the Email input', () => {
    render(<App />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders the Message textarea', () => {
    render(<App />)
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send your message/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('allows typing in the Name field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Name')
    await user.type(input, 'Kevin Nguyen')
    expect(input).toHaveValue('Kevin Nguyen')
  })

  it('allows typing in the Email field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('allows typing in the Message field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const textarea = screen.getByLabelText('Message')
    await user.type(textarea, 'Hello there!')
    expect(textarea).toHaveValue('Hello there!')
  })

  it('shows thank you message after submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /send your message/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('hides the form after submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /send your message/i }))
    expect(screen.queryByRole('heading', { name: /contact us/i })).not.toBeInTheDocument()
  })

  it('allows resetting the form after submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /send your message/i }))
    await user.click(screen.getByRole('button', { name: /send another message/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('clears fields after reset', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Name'), 'Test User')
    await user.type(screen.getByLabelText('Email'), 'test@test.com')
    await user.type(screen.getByLabelText('Message'), 'Hi!')
    await user.click(screen.getByRole('button', { name: /send your message/i }))
    await user.click(screen.getByRole('button', { name: /send another message/i }))
    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.getByLabelText('Email')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
  })

  it('shows success message text after submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /send your message/i }))
    expect(screen.getByText(/your message has been sent/i)).toBeInTheDocument()
  })

  it('renders the background image', () => {
    const { container } = render(<App />)
    const bgImg = container.querySelector('img[src*="reachform-mountain"]')
    expect(bgImg).toBeInTheDocument()
    expect(bgImg).toHaveAttribute('src', 'https://picsum.photos/seed/reachform-mountain/1920/1080')
  })
})
