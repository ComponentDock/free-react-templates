import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the heading and first step', () => {
    render(<App />)
    expect(screen.getByText('Sign up to great new account')).toBeInTheDocument()
    expect(screen.getByText('Account Information')).toBeInTheDocument()
    expect(screen.getByText(/Step 1 of 3/)).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('navigates to step 2 when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next step'))
    expect(screen.getByText('Personal Information')).toBeInTheDocument()
    expect(screen.getByText(/Step 2 of 3/)).toBeInTheDocument()
  })

  it('navigates to step 3 when Next is clicked twice', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next step'))
    await user.click(screen.getByLabelText('Next step'))
    expect(screen.getByText('Payment Details')).toBeInTheDocument()
    expect(screen.getByText(/Step 3 of 3/)).toBeInTheDocument()
  })

  it('shows Submit button on the last step', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next step'))
    await user.click(screen.getByLabelText('Next step'))
    expect(screen.getByLabelText('Submit')).toBeInTheDocument()
  })

  it('navigates back to previous step', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next step'))
    expect(screen.getByText('Personal Information')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Previous step'))
    expect(screen.getByText('Account Information')).toBeInTheDocument()
    expect(screen.getByText(/Step 1 of 3/)).toBeInTheDocument()
  })

  it('disables Previous button on first step', () => {
    render(<App />)
    expect(screen.getByLabelText('Previous step')).toBeDisabled()
  })

  it('prevents default form submission', () => {
    render(<App />)
    const form = document.querySelector('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
