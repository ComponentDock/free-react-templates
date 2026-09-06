import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading and launch modal button', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Signgate')
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('opens the modal when clicking the launch button', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('shows modal content including heading, description, form fields, submit button, privacy note, close button, and image', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()

    // Heading
    expect(screen.getByText('Sign up to access all the resources')).toBeInTheDocument()

    // Description
    expect(screen.getByText(/sign up now and get instant access/i)).toBeInTheDocument()

    // Form fields with correct labels and types
    const emailInput = screen.getByLabelText('Email Address')
    expect(emailInput).toHaveAttribute('type', 'email')

    const firstNameInput = screen.getByLabelText('First Name')
    expect(firstNameInput).toHaveAttribute('type', 'text')

    const passwordInput = screen.getByLabelText('Password')
    expect(passwordInput).toHaveAttribute('type', 'password')

    // Submit button
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()

    // Privacy note
    expect(screen.getByText(/by clicking sign up/i)).toBeInTheDocument()

    // Close button
    expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()

    // Promotional image
    const promoImage = screen.getByRole('img', { name: /promotional/i })
    expect(promoImage).toBeInTheDocument()
  })

  it('closes the modal on X button click', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close modal/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal on backdrop click', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()

    // Click the backdrop (the parent overlay div)
    const backdrop = dialog.parentElement!
    await user.click(backdrop)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal on Escape key', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('traps focus within the modal on Tab', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    const closeBtn = screen.getByRole('button', { name: /close modal/i })

    // All focusable elements inside the modal (close btn → email → first name → password → submit → TOS link)
    const focusableInOrder = [
      closeBtn,
      screen.getByLabelText('Email Address'),
      screen.getByLabelText('First Name'),
      screen.getByLabelText('Password'),
      screen.getByRole('button', { name: /sign up/i }),
      screen.getByRole('link', { name: /terms of service/i }),
    ]

    // The first focusable element should be focused when modal opens
    expect(closeBtn).toHaveFocus()

    // Tab through all elements
    for (const el of focusableInOrder) {
      expect(el).toHaveFocus()
      await user.tab()
    }

    // After the last element, focus should cycle back to the first
    expect(closeBtn).toHaveFocus()
  })

  it('traps focus on Shift+Tab from first element to last', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    const closeBtn = screen.getByRole('button', { name: /close modal/i })
    const lastFocusable = screen.getByRole('link', { name: /terms of service/i })

    // The first focusable element should be focused when modal opens
    expect(closeBtn).toHaveFocus()

    // Shift+Tab from the first element should cycle to the last
    await user.tab({ shift: true })
    expect(lastFocusable).toHaveFocus()
  })

  it('Shift+Tab from a non-first element does not wrap', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    // Focus the email input (non-first element)
    const emailInput = screen.getByLabelText('Email Address')
    emailInput.focus()
    expect(emailInput).toHaveFocus()

    // Shift+Tab from email should go to the close button (previous), not wrap
    await user.tab({ shift: true })
    expect(screen.getByRole('button', { name: /close modal/i })).toHaveFocus()
  })

  it('restores focus to the trigger button when modal closes', async () => {
    const user = userEvent.setup()
    render(<App />)

    const triggerBtn = screen.getByRole('button', { name: /launch modal/i })
    await user.click(triggerBtn)

    // Modal is open
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    // Close with Escape
    await user.keyboard('{Escape}')

    // Focus should return to trigger
    expect(triggerBtn).toHaveFocus()
  })

  it('renders the footer with site name and Component Dock link', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')

    // Footer site name
    expect(within(footer).getByText('Signgate')).toBeInTheDocument()

    // Component Dock link
    const link = within(footer).getByRole('link', { name: /more templates at component dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('form fields have correct types and labels', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    // Email
    const email = screen.getByLabelText('Email Address')
    expect(email).toHaveAttribute('type', 'email')
    expect(email).toHaveAttribute('name', 'email')

    // First Name
    const firstName = screen.getByLabelText('First Name')
    expect(firstName).toHaveAttribute('type', 'text')
    expect(firstName).toHaveAttribute('name', 'firstName')

    // Password
    const password = screen.getByLabelText('Password')
    expect(password).toHaveAttribute('type', 'password')
    expect(password).toHaveAttribute('name', 'password')
  })

  it('closes the modal on form submission', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    // Fill required fields
    await user.type(screen.getByLabelText('Email Address'), 'test@example.com')
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Password'), 'password123')

    // Submit the form
    await user.click(screen.getByRole('button', { name: /sign up/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
