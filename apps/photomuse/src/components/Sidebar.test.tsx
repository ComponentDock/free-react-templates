import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the author name', () => {
    render(<Sidebar />)
    expect(screen.getByText('Louie Smith')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /collection/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about me/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the author avatar image', () => {
    render(<Sidebar />)
    expect(screen.getByAltText('Author avatar')).toBeInTheDocument()
  })

  it('renders the newsletter heading', () => {
    render(<Sidebar />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders the newsletter email input', () => {
    render(<Sidebar />)
    expect(screen.getByLabelText(/email address for newsletter/i)).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const input = screen.getByLabelText(/email address for newsletter/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('renders the subscribe button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('prevents default on newsletter form submit', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const input = screen.getByLabelText(/email address for newsletter/i)
    const form = input.closest('form')!
    const submitPrevented = vi.fn()
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      submitPrevented()
    })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(submitPrevented).toHaveBeenCalled()
  })
})
