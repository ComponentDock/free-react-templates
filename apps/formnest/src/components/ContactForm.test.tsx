import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the form heading', () => {
    render(<ContactForm />)
    expect(screen.getByText('How can we help?')).toBeInTheDocument()
  })

  it('renders all form fields with correct placeholders', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your organization')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Example: January 15th')).toBeInTheDocument()
  })

  it('renders required markers on Name, Email, and Description', () => {
    render(<ContactForm />)
    const nameLabel = screen.getByText('Name')
    expect(nameLabel.parentElement).toHaveTextContent('*')
    const emailLabel = screen.getByText('Email')
    expect(emailLabel.parentElement).toHaveTextContent('*')
    const descLabel = screen.getByText('Project Description')
    expect(descLabel.parentElement).toHaveTextContent('*')
  })

  it('renders the budget select with options', () => {
    render(<ContactForm />)
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    expect(screen.getByText('Choose...')).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('submits form and prevents default', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('Your name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Your email address'), 'jane@test.com')
    await user.type(screen.getByRole('textbox', { name: /project description/i }), 'A new project')
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })

  it('allows typing in all text fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('Your name'), 'Alice')
    expect(screen.getByPlaceholderText('Your name')).toHaveValue('Alice')

    await user.type(screen.getByPlaceholderText('Your organization'), 'Corp')
    expect(screen.getByPlaceholderText('Your organization')).toHaveValue('Corp')

    await user.type(screen.getByPlaceholderText('Your email address'), 'a@b.com')
    expect(screen.getByPlaceholderText('Your email address')).toHaveValue('a@b.com')
  })

  it('allows selecting a budget option', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.selectOptions(screen.getByRole('combobox'), 'large')
    expect(screen.getByRole('combobox')).toHaveValue('large')
  })

  it('allows typing in the target date field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('Example: January 15th'), 'April 10th')
    expect(screen.getByPlaceholderText('Example: January 15th')).toHaveValue('April 10th')
  })
})
