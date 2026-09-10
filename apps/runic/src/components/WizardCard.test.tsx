import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WizardCard } from './WizardCard'

describe('WizardCard', () => {
  it('renders step 1 fields initially', () => {
    render(<WizardCard />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('renders step dots', () => {
    render(<WizardCard />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('renders decorative header', () => {
    render(<WizardCard />)
    expect(screen.getByText(/tell us about yours/i)).toBeInTheDocument()
  })

  it('shows validation errors when Continue clicked with empty required fields', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/please fill in all required fields/i)
  })

  it('advances to step 2 when required fields are filled', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByText('Programming')).toBeInTheDocument()
    expect(screen.getByText('Research')).toBeInTheDocument()
  })

  it('shows Back button on step 2', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByRole('button', { name: /previous step/i })).toBeInTheDocument()
  })

  it('navigates back to step 1', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.click(screen.getByRole('button', { name: /previous step/i }))
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByDisplayValue('John')).toBeInTheDocument()
  })

  it('advances to step 3 from step 2', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    // Fill step 1
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    // Step 2 — click Continue without selecting category (allowed)
    await user.click(screen.getByRole('button', { name: /next step/i }))
    // Step 3
    expect(screen.getByPlaceholderText('Street Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument()
  })

  it('shows Finish button on step 3', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByRole('button', { name: /finish/i })).toBeInTheDocument()
  })

  it('completes the wizard on Finish click', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.click(screen.getByRole('button', { name: /finish/i }))
    expect(screen.getByText(/onboarding complete/i)).toBeInTheDocument()
  })

  it('does not show Back button on step 1', () => {
    render(<WizardCard />)
    expect(screen.queryByRole('button', { name: /previous step/i })).not.toBeInTheDocument()
  })

  it('updates step indicator dots as user advances', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    let tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')

    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))

    tabs = screen.getAllByRole('tab')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
  })

  it('tracks active field focus on step 1', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.click(screen.getByPlaceholderText('Email'))
    const emailInput = screen.getByPlaceholderText('Email')
    const dot = emailInput.closest('.relative')?.querySelector('span[aria-hidden="true"]')
    expect(dot).toHaveClass('bg-dot-active')
  })

  it('allows selecting a category on step 2', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.click(screen.getByText('Business'))
    const businessBtn = screen.getByText('Business').closest('button')
    expect(businessBtn).toHaveClass('ring-2')
  })

  it('displays street/city fields on step 3', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.type(screen.getByPlaceholderText('Street Name'), 'Main St')
    await user.type(screen.getByPlaceholderText('City'), 'Portland')
    expect(screen.getByDisplayValue('Main St')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Portland')).toBeInTheDocument()
  })
})
