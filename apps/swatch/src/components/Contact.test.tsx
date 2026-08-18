import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'
import { contactInfo } from '../data'

describe('Contact', () => {
  it('renders the heading, contact info rows and the form fields', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByText(contactInfo.subtitle)).toBeInTheDocument()
    expect(screen.getByText(/My Address:/)).toBeInTheDocument()
    expect(screen.getByText(contactInfo.address)).toBeInTheDocument()
    expect(screen.getByText(/My Email:/)).toBeInTheDocument()
    expect(screen.getByText(/My Phone:/)).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Create a message here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows a success status and unmounts the form after submitting', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('Name'), 'Jane Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'A new project')
    await user.type(screen.getByPlaceholderText('Create a message here'), 'Hello there!')

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Message sent successfully!')
    expect(screen.queryByPlaceholderText('Name')).not.toBeInTheDocument()
  })

  it('renders the Follow me here social links', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { name: 'Follow me here' })).toBeInTheDocument()
    for (const label of contactInfo.followLinks) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
