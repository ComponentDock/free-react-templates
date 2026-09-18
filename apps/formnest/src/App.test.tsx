import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Let's work together")
  })

  it('renders the form label', () => {
    render(<App />)
    expect(screen.getByText('How can we help?')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the email contact link', () => {
    render(<App />)
    expect(screen.getByText('info@mywebsite.com')).toHaveAttribute(
      'href',
      'mailto:info@mywebsite.com',
    )
  })

  it('renders all form fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your organization')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument()
    expect(screen.getByText('Choose...')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Example: January 15th')).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders required field markers', () => {
    render(<App />)
    const requiredMarkers = screen.getAllByText('*')
    expect(requiredMarkers.length).toBeGreaterThanOrEqual(3)
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('Your name'), 'John')
    expect(screen.getByPlaceholderText('Your name')).toHaveValue('John')

    await user.type(screen.getByPlaceholderText('Your email address'), 'a@b.com')
    expect(screen.getByPlaceholderText('Your email address')).toHaveValue('a@b.com')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('Your name'), 'John')
    await user.type(screen.getByPlaceholderText('Your email address'), 'a@b.com')
    await user.type(screen.getByRole('textbox', { name: /project description/i }), 'Test project')
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })

  it('allows selecting budget option', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.selectOptions(screen.getByRole('combobox'), 'medium')
    expect(screen.getByRole('combobox')).toHaveValue('medium')
  })

  it('allows typing in organization field', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('Your organization'), 'Acme Inc')
    expect(screen.getByPlaceholderText('Your organization')).toHaveValue('Acme Inc')
  })

  it('allows typing in target date field', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('Example: January 15th'), 'March 1st')
    expect(screen.getByPlaceholderText('Example: January 15th')).toHaveValue('March 1st')
  })

  it('renders the body paragraphs', () => {
    render(<App />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByText(/Quasi optio numquam/)).toBeInTheDocument()
    expect(screen.getByText(/Dolor aliquid/)).toBeInTheDocument()
  })
})
