import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactSidebar } from './ContactSidebar'

describe('ContactSidebar', () => {
  it('renders the heading', () => {
    render(<ContactSidebar isOpen onClose={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders name input', () => {
    render(<ContactSidebar isOpen onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<ContactSidebar isOpen onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('renders message textarea', () => {
    render(<ContactSidebar isOpen onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Write your message')).toBeInTheDocument()
  })

  it('renders SEND button', () => {
    render(<ContactSidebar isOpen onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn()
    render(<ContactSidebar isOpen onClose={onClose} />)
    await userEvent.click(screen.getByRole('button', { name: /close contact sidebar/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('prevents default form submission', async () => {
    render(<ContactSidebar isOpen onClose={vi.fn()} />)
    const form = document.querySelector('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.spyOn(submitEvent, 'preventDefault')
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })

  it('accepts text in name field', async () => {
    render(<ContactSidebar isOpen onClose={vi.fn()} />)
    const nameInput = screen.getByPlaceholderText('Enter your name')
    await userEvent.type(nameInput, 'Alice')
    expect(nameInput).toHaveValue('Alice')
  })

  it('accepts text in email field', async () => {
    render(<ContactSidebar isOpen onClose={vi.fn()} />)
    const emailInput = screen.getByPlaceholderText('Enter your email')
    await userEvent.type(emailInput, 'alice@example.com')
    expect(emailInput).toHaveValue('alice@example.com')
  })

  it('accepts text in message textarea', async () => {
    render(<ContactSidebar isOpen onClose={vi.fn()} />)
    const messageArea = screen.getByPlaceholderText('Write your message')
    await userEvent.type(messageArea, 'Hello there')
    expect(messageArea).toHaveValue('Hello there')
  })

  it('is hidden when isOpen is false', () => {
    render(<ContactSidebar isOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('heading', { name: /get in touch/i })).not.toBeInTheDocument()
  })
})
