import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the register wizard heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /register wizard/i })).toBeInTheDocument()
  })

  it('shows step 1 username input by default', () => {
    render(<App />)

    expect(screen.getByPlaceholderText('Username here')).toBeInTheDocument()
  })

  it('shows the next step button on step 1', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: /next step/i })).toBeInTheDocument()
  })

  it('navigates to step 2 when next step is clicked', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByPlaceholderText('Username here'), 'john_doe')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    expect(screen.getByPlaceholderText('ex: example@email.com')).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Username here')).not.toBeInTheDocument()
  })

  it('navigates to step 3 password step', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByPlaceholderText('Username here'), 'john_doe')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.type(screen.getByPlaceholderText('ex: example@email.com'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    // Password inputs should be visible
    const pwInputs = document.querySelectorAll('input[type="password"]')
    expect(pwInputs.length).toBeGreaterThanOrEqual(1)
  })

  it('navigates through all 4 steps', async () => {
    const user = userEvent.setup()

    const { unmount } = render(<App />)

    // Step 1: username
    await user.type(screen.getByPlaceholderText('Username here'), 'john_doe')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    // Step 2: email
    await user.type(screen.getByPlaceholderText('ex: example@email.com'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    // Step 3: password
    const pwInputs = document.querySelectorAll('input[type="password"]')
    const pwInput = pwInputs[0] as HTMLInputElement
    await user.type(pwInput, 'securePass123')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    // Step 4: confirm password
    const confirmBtn = screen.getByRole('button', { name: /confirm/i })
    expect(confirmBtn).toBeInTheDocument()

    const confirmInputs = document.querySelectorAll('input[type="password"]')
    const confirmInput = confirmInputs[0] as HTMLInputElement
    await user.type(confirmInput, 'securePass123')
    await user.click(confirmBtn)

    expect(screen.getByText('Registration Complete')).toBeInTheDocument()

    unmount()
  })

  it('shows success state with username', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByPlaceholderText('Username here'), 'alice')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.type(screen.getByPlaceholderText('ex: example@email.com'), 'alice@test.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    const pwInputs = document.querySelectorAll('input[type="password"]')
    await user.type(pwInputs[0] as HTMLInputElement, 'pass123')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    const confirmInputs = document.querySelectorAll('input[type="password"]')
    await user.type(confirmInputs[0] as HTMLInputElement, 'pass123')
    await user.click(screen.getByRole('button', { name: /confirm/i }))

    expect(screen.getByText('Welcome, alice! Your account has been created.')).toBeInTheDocument()
  })

  it('renders the step indicator with 4 steps', () => {
    const { container } = render(<App />)

    const nav = container.querySelector('nav[aria-label="Wizard steps"]')
    expect(nav).not.toBeNull()
    const labels = nav!.querySelectorAll('span.uppercase')
    const texts = Array.from(labels).map((el) => el.textContent)
    expect(texts).toContain('username')
    expect(texts).toContain('email')
    expect(texts).toContain('password')
    expect(texts).toContain('confirm password')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('uses password input type for password step', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByPlaceholderText('Username here'), 'john_doe')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.type(screen.getByPlaceholderText('ex: example@email.com'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    const pwInputs = document.querySelectorAll('input[type="password"]')
    expect(pwInputs.length).toBeGreaterThanOrEqual(1)
  })

  it('uses email input type for email step', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByPlaceholderText('Username here'), 'john_doe')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    const emailInput = screen.getByPlaceholderText('ex: example@email.com')
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('marks step 1 as active by default', () => {
    const { container } = render(<App />)

    const navItems = container.querySelectorAll('nav[aria-label="Wizard steps"] > div')
    expect(navItems[0]).toHaveAttribute('aria-current', 'step')
  })

  it('marks step 2 as active after advancing', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    await user.type(screen.getByPlaceholderText('Username here'), 'john_doe')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    const navItems = container.querySelectorAll('nav[aria-label="Wizard steps"] > div')
    expect(navItems[1]).toHaveAttribute('aria-current', 'step')
    expect(navItems[0]).not.toHaveAttribute('aria-current')
  })

  it('shows background image', () => {
    const { container } = render(<App />)

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.style.backgroundImage).toContain('picsum.photos')
  })

  it('shows the checkmark icon on success page', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByPlaceholderText('Username here'), 'john_doe')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.type(screen.getByPlaceholderText('ex: example@email.com'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    const pwInputs = document.querySelectorAll('input[type="password"]')
    await user.type(pwInputs[0] as HTMLInputElement, 'securePass123')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    const confirmInputs = document.querySelectorAll('input[type="password"]')
    await user.type(confirmInputs[0] as HTMLInputElement, 'securePass123')
    await user.click(screen.getByRole('button', { name: /confirm/i }))

    expect(screen.getByText('✓')).toBeInTheDocument()
  })

  it('shows default user fallback when username is empty', async () => {
    const user = userEvent.setup()

    render(<App />)

    // Skip all steps without entering username
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.click(screen.getByRole('button', { name: /next step/i }))

    const pwInputs = document.querySelectorAll('input[type="password"]')
    await user.type(pwInputs[0] as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    const confirmInputs = document.querySelectorAll('input[type="password"]')
    await user.type(confirmInputs[0] as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /confirm/i }))

    expect(screen.getByText(/Welcome, User!/)).toBeInTheDocument()
  })
})
