import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WizardForm } from './WizardForm'

async function fillStep1(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText('First Name'), 'John')
  await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
  await user.type(screen.getByPlaceholderText('Email ID'), 'john@example.com')
  await user.type(screen.getByPlaceholderText('Your User ID'), 'jdoe')
  await user.type(screen.getByPlaceholderText('Country'), 'US')
  await user.type(screen.getByPlaceholderText('State'), 'CA')
  await user.type(screen.getByPlaceholderText('City'), 'LA')
  await user.click(screen.getByRole('button', { name: /continue/i }))
}

async function fillStep2(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText('Current Password'), 'pass1')
  await user.type(screen.getByPlaceholderText('Confirm Current Password'), 'pass1')
  await user.type(screen.getByPlaceholderText('New Password'), 'new1')
  await user.type(screen.getByPlaceholderText('Confirm New Password'), 'new1')
  await user.click(screen.getByRole('button', { name: /continue/i }))
}

async function fillStep3(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText('Full Name'), 'John Doe')
  await user.type(screen.getByPlaceholderText('Phone Number'), '1234567890')
  await user.type(screen.getByPlaceholderText('Street Address'), '123 Main St')
  await user.type(screen.getByPlaceholderText('City'), 'LA')
  await user.type(screen.getByPlaceholderText('Postal Code'), '90001')
  await user.type(screen.getByPlaceholderText('Country'), 'US')
  await user.click(screen.getByRole('button', { name: /continue/i }))
}

describe('WizardForm validation edge cases', () => {
  it('blocks step 2 when passwords do not match', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    // Fill mismatched passwords
    await user.type(screen.getByPlaceholderText('Current Password'), 'pass1')
    await user.type(screen.getByPlaceholderText('Confirm Current Password'), 'pass1')
    await user.type(screen.getByPlaceholderText('New Password'), 'abc')
    await user.type(screen.getByPlaceholderText('Confirm New Password'), 'xyz')
    await user.click(screen.getByRole('button', { name: /continue/i }))
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
    // Should stay on step 2
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Account Security')
  })

  it('blocks step 3 when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    await fillStep2(user)
    // Click Continue without filling step 3
    await user.click(screen.getByRole('button', { name: /continue/i }))
    expect(screen.getAllByText('Required').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Shipping Details')
  })

  it('blocks step 4 when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    await fillStep2(user)
    await fillStep3(user)
    // Click Place Order without filling step 4
    await user.click(screen.getByRole('button', { name: /place order/i }))
    expect(screen.getAllByText('Required').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Payment Details')
  })

  it('blocks step 2 when account fields are empty', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    // Click Continue without filling step 2
    await user.click(screen.getByRole('button', { name: /continue/i }))
    expect(screen.getAllByText('Required').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Account Security')
  })
})
