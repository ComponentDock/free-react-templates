import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('RegFold — Registration Form', () => {
  it('renders the registration form heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /registration form/i }),
    ).toBeInTheDocument()
  })

  it('renders first name and last name inputs', () => {
    render(<App />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
  })

  it('renders birthday date input', () => {
    render(<App />)
    expect(screen.getByLabelText(/birthday/i)).toBeInTheDocument()
  })

  it('renders gender radio buttons', () => {
    render(<App />)
    expect(screen.getByRole('radio', { name: 'Male' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Female' })).toBeInTheDocument()
  })

  it('defaults Male radio to checked', () => {
    render(<App />)
    const male = screen.getByRole('radio', {
      name: 'Male',
    }) as HTMLInputElement
    const female = screen.getByRole('radio', {
      name: 'Female',
    }) as HTMLInputElement
    expect(male).toBeChecked()
    expect(female).not.toBeChecked()
  })

  it('allows selecting Female radio', async () => {
    const user = userEvent.setup()
    render(<App />)
    const female = screen.getByRole('radio', {
      name: 'Female',
    }) as HTMLInputElement
    await user.click(female)
    expect(female).toBeChecked()
    const male = screen.getByRole('radio', {
      name: 'Male',
    }) as HTMLInputElement
    expect(male.checked).toBe(false)
  })

  it('allows selecting Male radio after Female', async () => {
    const user = userEvent.setup()
    render(<App />)
    const female = screen.getByRole('radio', {
      name: 'Female',
    }) as HTMLInputElement
    await user.click(female)
    expect(female).toBeChecked()
    const male = screen.getByRole('radio', {
      name: 'Male',
    }) as HTMLInputElement
    await user.click(male)
    expect(male).toBeChecked()
    expect(female.checked).toBe(false)
  })

  it('renders email and phone inputs', () => {
    render(<App />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
  })

  it('renders subject dropdown with options', () => {
    render(<App />)
    const select = screen.getByLabelText(/subject/i) as HTMLSelectElement
    expect(select).toBeInTheDocument()
    expect(select.options.length).toBe(4) // placeholder + 3 subjects
    expect(select.options.item(0)?.textContent).toBe('Choose option')
  })

  it('allows selecting a subject', async () => {
    const user = userEvent.setup()
    render(<App />)
    const select = screen.getByLabelText(/subject/i) as HTMLSelectElement
    await user.selectOptions(select, 'subject2')
    expect(select).toHaveValue('subject2')
  })

  it('allows typing in first name', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText(/first name/i)
    await user.type(input, 'John')
    expect(input).toHaveValue('John')
  })

  it('allows typing in last name', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText(/last name/i)
    await user.type(input, 'Doe')
    expect(input).toHaveValue('Doe')
  })

  it('allows typing in email', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText(/email/i)
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('allows typing in phone', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText(/phone number/i)
    await user.type(input, '555-1234')
    expect(input).toHaveValue('555-1234')
  })

  it('allows setting birthday', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText(/birthday/i)
    await user.clear(input)
    await user.type(input, '2000-01-15')
    expect(input).toHaveValue('2000-01-15')
  })

  it('renders a Submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    const form = document.querySelector('form')!
    let submitted = false
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      submitted = true
    })
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(submitted).toBe(true)
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows "Made with" text in footer', () => {
    render(<App />)
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('RegFold — Registration Form Template')
  })
})
