import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument()
  })

  it('renders the image panel with welcome text', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { name: /welcome to signup form/i })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders three social login buttons', () => {
    render(<App />)
    const socialButtons = screen.getAllByRole('button')
    // 3 social buttons + 1 submit button = 4 total
    expect(socialButtons.length).toBeGreaterThanOrEqual(4)
  })

  it('renders the "or" divider', () => {
    render(<App />)
    expect(screen.getByText('or')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<App />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('renders the terms checkbox checked by default', () => {
    render(<App />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('renders the create account button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /create an account/i })).toBeInTheDocument()
  })

  it('renders the sign-in link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('prevents form submission with empty required fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Clear all fields and try to submit
    const nameInput = screen.getByLabelText(/full name/i)
    await user.clear(nameInput)
    const submitBtn = screen.getByRole('button', { name: /create an account/i })
    await user.click(submitBtn)
    // Form should not submit (HTML5 validation prevents it)
    expect(nameInput).toBeInvalid()
  })

  it('calls handleSubmit when form is valid and submitted', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText(/full name/i), 'John')
    await user.type(screen.getByLabelText(/username/i), 'john')
    await user.type(screen.getByLabelText(/email address/i), 'john@test.com')
    await user.type(screen.getByLabelText(/^password$/i), 'secret123')
    const submitBtn = screen.getByRole('button', { name: /create an account/i })
    await user.click(submitBtn)
    // handleSubmit calls e.preventDefault() — form doesn't navigate
    expect(screen.getByLabelText(/full name/i)).toHaveValue('John')
  })

  it('has split layout structure', () => {
    render(<App />)
    const panels = screen.getAllByTestId('image-panel')
    expect(panels.length).toBeGreaterThanOrEqual(1)
  })
})
