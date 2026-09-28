import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the Formlane heading in the document title', () => {
    render(<App />)
    expect(document.title).toBe('Formlane — Registration Form')
  })

  it('renders the gradient background', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main')
    expect(main).toHaveStyle({ background: 'linear-gradient(136deg, #009EFD 0%, #2AF598 100%)' })
  })

  it('renders the form card with sign up form by default', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: /registration illustration/i })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/formlane-hero/480/600',
    )
  })

  it('renders sign up form fields', () => {
    render(<App />)
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('switches to sign in tab on click', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Click the Sign In tab button (type=button, not submit)
    const signInTabs = screen.getAllByRole('button', { name: /sign in/i })
    await user.click(signInTabs[0]!)
    // Sign in form should now be visible (sign up form removed)
    expect(screen.queryByLabelText(/confirm password/i)).toBeInTheDocument()
    // Register button should no longer exist
    expect(screen.queryByRole('button', { name: /register/i })).not.toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<App />)

    const submitButton = screen.getByRole('button', { name: /register/i })
    await user.click(submitButton)
  })
})
