import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the form wizard with gradient background', () => {
    render(<App />)
    expect(screen.getByText('Form Wizard')).toBeInTheDocument()
  })

  it('displays progress bar at 33% on step 1', () => {
    render(<App />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '33')
  })

  it('displays step 1 personal info fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Full name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone number')).toBeInTheDocument()
  })

  it('navigates to step 2 on Next click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByLabelText('Building Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Street')).toBeInTheDocument()
    expect(screen.getByLabelText('Town')).toBeInTheDocument()
    expect(screen.getByLabelText('Zip code')).toBeInTheDocument()
  })

  it('shows Back button on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()
  })

  it('returns to step 1 on Back click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByLabelText('Full name')).toBeInTheDocument()
  })

  it('preserves data when navigating back and forth', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Full name'), 'John Doe')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByLabelText('Full name')).toHaveValue('John Doe')
  })

  it('navigates to step 3 payment fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByLabelText('Card Holder Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Card Number')).toBeInTheDocument()
    expect(screen.getByLabelText('CVC')).toBeInTheDocument()
    expect(screen.getByLabelText('Expiration')).toBeInTheDocument()
  })

  it('shows Submit button on step 3', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('submits the form and shows confirmation', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Full name'), 'Jane Smith')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('Form Submitted!')).toBeInTheDocument()
    expect(screen.getByText(/Thank you, Jane Smith/)).toBeInTheDocument()
  })

  it('shows default name on submit when name is empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/Thank you, User/)).toBeInTheDocument()
  })

  it('updates progress bar on step change', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '33')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '67')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('renders step indicator dots', () => {
    render(<App />)
    expect(screen.getByLabelText('Step 1 (current)')).toBeInTheDocument()
    expect(screen.getByLabelText('Step 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Step 3')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('fills personal info fields and updates state', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Full name'), 'Alice')
    await user.type(screen.getByLabelText('Email'), 'alice@test.com')
    await user.type(screen.getByLabelText('Phone number'), '555-1234')
    expect(screen.getByLabelText('Full name')).toHaveValue('Alice')
    expect(screen.getByLabelText('Email')).toHaveValue('alice@test.com')
    expect(screen.getByLabelText('Phone number')).toHaveValue('555-1234')
  })

  it('fills address fields and updates state', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText('Building Number'), '42')
    await user.type(screen.getByLabelText('Street'), 'Main St')
    await user.type(screen.getByLabelText('Town'), 'Springfield')
    await user.type(screen.getByLabelText('Zip code'), '12345')
    expect(screen.getByLabelText('Building Number')).toHaveValue('42')
    expect(screen.getByLabelText('Street')).toHaveValue('Main St')
    expect(screen.getByLabelText('Town')).toHaveValue('Springfield')
    expect(screen.getByLabelText('Zip code')).toHaveValue('12345')
  })

  it('fills payment fields and updates state', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText('Card Holder Name'), 'John Doe')
    await user.type(screen.getByLabelText('Card Number'), '4111111111111111')
    await user.type(screen.getByLabelText('CVC'), '123')
    await user.type(screen.getByLabelText('Expiration'), '12/25')
    expect(screen.getByLabelText('Card Holder Name')).toHaveValue('John Doe')
    expect(screen.getByLabelText('Card Number')).toHaveValue('4111111111111111')
    expect(screen.getByLabelText('CVC')).toHaveValue('123')
    expect(screen.getByLabelText('Expiration')).toHaveValue('12/25')
  })
})
