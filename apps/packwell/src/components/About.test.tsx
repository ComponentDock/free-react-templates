import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /We have 25 years/i })).toBeInTheDocument()
    expect(screen.getByText(/There are many variations/i)).toBeInTheDocument()
  })

  it('renders the stats', () => {
    render(<About />)
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('Project Done')).toBeInTheDocument()
  })

  it('renders the quote form with all fields', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Get A Quote' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Quantity')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Destination')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message...')).toBeInTheDocument()
  })

  it('allows typing in all form fields', async () => {
    const user = userEvent.setup()
    render(<About />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Email'), 'j@x.com')
    await user.type(screen.getByPlaceholderText('Phone'), '123')
    await user.type(screen.getByPlaceholderText('Type'), 'Freight')
    await user.type(screen.getByPlaceholderText('Quantity'), '10')
    await user.type(screen.getByPlaceholderText('Destination'), 'NYC')
    await user.type(screen.getByPlaceholderText('Your Message...'), 'Hello')

    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('John')
  })

  it('submits the quote form and shows confirmation', async () => {
    const user = userEvent.setup()
    render(<About />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John Doe')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByText(/Thank you/i)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Your Name')).not.toBeInTheDocument()
  })

  it('renders Read More link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Read More/i })).toBeInTheDocument()
  })
})
