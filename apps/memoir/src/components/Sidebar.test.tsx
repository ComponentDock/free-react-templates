import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the nav menu with Home active and the Memoir wordmark', () => {
    render(<Sidebar />)
    for (const label of ['Home', 'Fashion', 'Travel', 'About', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    const home = screen.getAllByRole('link', { name: 'Home' })[0]!
    expect(home.className).toContain('text-sky-500')
    expect(home.className).toContain('after:bg-sky-500')
    expect(screen.getByRole('heading', { name: /Memoir/i })).toBeInTheDocument()
  })

  it('renders the subscribe box with an email form', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: /subscribe for newsletter/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders the paraphrased copyright line', () => {
    render(<Sidebar />)
    expect(screen.getByText(/Free React Templates/i)).toBeInTheDocument()
    expect(screen.queryByText(/Colorlib/i)).not.toBeInTheDocument()
  })

  it('shows an error for an invalid email and does not subscribe', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    await user.type(screen.getByLabelText(/email/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success message for a valid email', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    await user.type(screen.getByLabelText(/email/i), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
