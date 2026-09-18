import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GetQuote } from './GetQuote'

describe('GetQuote', () => {
  it('renders the heading and form fields', () => {
    render(<GetQuote />)

    expect(screen.getByRole('heading', { level: 2, name: 'Get a quote' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /your name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /phone number/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /select a service/i })).toBeInTheDocument()
  })

  it('submits the form without crashing', async () => {
    const user = userEvent.setup()
    render(<GetQuote />)

    await user.type(screen.getByRole('textbox', { name: /your name/i }), 'John')
    await user.type(screen.getByRole('textbox', { name: /phone number/i }), '555-1234')
    await user.selectOptions(screen.getByRole('combobox', { name: /select a service/i }), 'access')
    await user.click(screen.getByRole('button', { name: /get a quote/i }))

    expect(screen.getByRole('textbox', { name: /your name/i })).toHaveValue('John')
  })

  it('has all service options', () => {
    render(<GetQuote />)

    const select = screen.getByRole('combobox', { name: /select a service/i })
    expect(select).toBeInTheDocument()

    const options = screen.getAllByRole('option')
    expect(options.length).toBe(5) // placeholder + 4 services
  })
})
