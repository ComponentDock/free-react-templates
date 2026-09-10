import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WizardForm } from './WizardForm'

async function fillStep1(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText('Full Name'), 'John')
  await user.type(screen.getByPlaceholderText('Education Level'), 'BS')
  await user.type(screen.getByPlaceholderText('Email ID'), 'john@example.com')
  await user.type(screen.getByPlaceholderText('Phone Number'), '1234567890')
  await user.type(screen.getByPlaceholderText('Specialization'), 'CS')
  await user.type(screen.getByPlaceholderText('Date of Birth'), '01-01-2000')
}

describe('WizardForm', () => {
  it('starts on step 1 with User Profile heading', () => {
    render(<WizardForm />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('User Profile')
  })

  it('shows step indicator 1 / 3', () => {
    render(<WizardForm />)
    expect(screen.getByLabelText('Step 1 of 3')).toBeInTheDocument()
  })

  it('does not show Back button on step 1', () => {
    render(<WizardForm />)
    expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument()
  })

  it('shows validation errors when NEXT clicked with empty fields', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText(/your must fill all fields/i)).toBeInTheDocument()
  })

  it('navigates to step 2 after filling step 1', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Residential Address')
    expect(screen.getByLabelText('Step 2 of 3')).toBeInTheDocument()
  })

  it('shows Back button on step 2', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()
  })

  it('shows validation errors on step 2 with empty address fields', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    await user.click(screen.getByRole('button', { name: /next/i }))
    // Click Next without filling address fields — country has a default but
    // streetAddress, apartment, townCity, county, postcodeZip are all empty
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText(/your must fill all fields/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Residential Address')
  })

  it('navigates back to step 1', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('User Profile')
  })

  it('navigates to step 3 after filling step 2', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByPlaceholderText('Street Address'), '123 Main')
    await user.type(screen.getByPlaceholderText('Apartment'), 'Apt 1')
    await user.type(screen.getByPlaceholderText('Town / City'), 'LA')
    await user.type(screen.getByPlaceholderText('County'), 'LA')
    await user.type(screen.getByPlaceholderText('Postcode / Zip'), '90001')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('What are you doing?')
    expect(screen.getByLabelText('Step 3 of 3')).toBeInTheDocument()
  })

  it('shows Finish button on step 3', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByPlaceholderText('Street Address'), '123 Main')
    await user.type(screen.getByPlaceholderText('Apartment'), 'Apt 1')
    await user.type(screen.getByPlaceholderText('Town / City'), 'LA')
    await user.type(screen.getByPlaceholderText('County'), 'LA')
    await user.type(screen.getByPlaceholderText('Postcode / Zip'), '90001')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /finish/i })).toBeInTheDocument()
  })

  it('completes the wizard on Finish click', async () => {
    const user = userEvent.setup()
    render(<WizardForm />)
    await fillStep1(user)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByPlaceholderText('Street Address'), '123 Main')
    await user.type(screen.getByPlaceholderText('Apartment'), 'Apt 1')
    await user.type(screen.getByPlaceholderText('Town / City'), 'LA')
    await user.type(screen.getByPlaceholderText('County'), 'LA')
    await user.type(screen.getByPlaceholderText('Postcode / Zip'), '90001')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /finish/i }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Submitted!')
  })
})
