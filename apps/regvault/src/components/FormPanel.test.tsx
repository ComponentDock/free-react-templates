import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { FormPanel } from './FormPanel'

describe('FormPanel', () => {
  it('renders the heading', () => {
    render(<FormPanel />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Set The Event')
  })

  it('displays the price as read-only text', () => {
    render(<FormPanel />)
    expect(screen.getByText('$270')).toBeInTheDocument()
  })

  it('renders a people dropdown defaulting to 1', () => {
    render(<FormPanel />)
    const select = screen.getByDisplayValue('1')
    expect(select).toBeInTheDocument()
    expect(select.tagName).toBe('SELECT')
  })

  it('allows changing the people dropdown', async () => {
    const user = userEvent.setup()
    render(<FormPanel />)
    const select = screen.getByDisplayValue('1')
    await user.selectOptions(select, '3')
    expect(screen.getByDisplayValue('3')).toBeInTheDocument()
  })

  it('renders name input', () => {
    render(<FormPanel />)
    const input = screen.getByLabelText(/name/i)
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders mail input', () => {
    render(<FormPanel />)
    const input = screen.getByLabelText(/mail/i)
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders phone input', () => {
    render(<FormPanel />)
    const input = screen.getByLabelText(/phone/i)
    expect(input).toHaveAttribute('type', 'tel')
  })

  it('renders comment textarea', () => {
    render(<FormPanel />)
    const textarea = screen.getByLabelText(/comment/i)
    expect(textarea.tagName).toBe('TEXTAREA')
  })

  it('allows typing in text inputs', async () => {
    const user = userEvent.setup()
    render(<FormPanel />)
    await user.type(screen.getByLabelText(/name/i), 'Alice')
    expect(screen.getByLabelText(/name/i)).toHaveValue('Alice')
  })

  it('renders the submit button', () => {
    render(<FormPanel />)
    expect(screen.getByRole('button', { name: /send your booking/i })).toBeInTheDocument()
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<FormPanel />)
    await user.click(screen.getByRole('button', { name: /send your booking/i }))
  })
})
