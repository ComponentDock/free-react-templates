import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('renders the quote form heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Request A Quote/i })).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Family Law')).toBeInTheDocument()
    expect(screen.getByText('Business Law')).toBeInTheDocument()
    expect(screen.getByText('Insurance Law')).toBeInTheDocument()
    expect(screen.getByText('Criminal Law')).toBeInTheDocument()
  })

  it('renders email inputs and textarea', () => {
    render(<Services />)
    expect(screen.getAllByRole('textbox')).toHaveLength(3) // 2 email inputs + 1 textarea
  })

  it('renders the submit button', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('submits the form and shows thank-you message', async () => {
    render(<Services />)
    const user = userEvent.setup()
    const inputs = screen.getAllByRole('textbox')
    await user.type(inputs[0]!, 'test@example.com')
    await user.type(inputs[1]!, 'reply@example.com')
    await user.type(inputs[2]!, 'Hello there')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText(/Thank you/i)).toBeInTheDocument()
  })
})
