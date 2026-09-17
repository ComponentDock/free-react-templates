import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  describe('in hi mode', () => {
    it('renders Name, Email, Message fields', () => {
      render(<ContactForm mode="hi" />)

      expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/your email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/your message/i)).toBeInTheDocument()
    })

    it('does not render service or budget fields', () => {
      render(<ContactForm mode="hi" />)

      expect(screen.queryByLabelText(/needed services/i)).not.toBeInTheDocument()
      expect(screen.queryByLabelText(/budget/i)).not.toBeInTheDocument()
    })

    it('renders submit button', () => {
      render(<ContactForm mode="hi" />)

      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
    })

    it('submit button has type submit', () => {
      render(<ContactForm mode="hi" />)

      expect(screen.getByRole('button', { name: /submit/i })).toHaveAttribute('type', 'submit')
    })

    it('allows typing in name field', async () => {
      const user = userEvent.setup()
      render(<ContactForm mode="hi" />)

      await user.type(screen.getByLabelText(/your name/i), 'Jane')
      expect(screen.getByLabelText(/your name/i)).toHaveValue('Jane')
    })

    it('allows typing in email field', async () => {
      const user = userEvent.setup()
      render(<ContactForm mode="hi" />)

      await user.type(screen.getByLabelText(/your email/i), 'jane@example.com')
      expect(screen.getByLabelText(/your email/i)).toHaveValue('jane@example.com')
    })

    it('allows typing in message field', async () => {
      const user = userEvent.setup()
      render(<ContactForm mode="hi" />)

      await user.type(screen.getByLabelText(/your message/i), 'Hello!')
      expect(screen.getByLabelText(/your message/i)).toHaveValue('Hello!')
    })

    it('submits with entered data', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<ContactForm mode="hi" onSubmit={onSubmit} />)

      await user.type(screen.getByLabelText(/your name/i), 'Jane Doe')
      await user.type(screen.getByLabelText(/your email/i), 'jane@example.com')
      await user.type(screen.getByLabelText(/your message/i), 'Hello!')
      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(onSubmit).toHaveBeenCalledWith({
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Hello!',
        service: '',
        budget: '',
      })
    })

    it('shows success state after submission', async () => {
      const user = userEvent.setup()
      render(<ContactForm mode="hi" />)

      await user.type(screen.getByLabelText(/your name/i), 'Jane Doe')
      await user.type(screen.getByLabelText(/your email/i), 'jane@example.com')
      await user.type(screen.getByLabelText(/your message/i), 'Hello!')
      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(screen.getByTestId('success-state')).toBeInTheDocument()
      expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    })

    it('allows resetting after submission', async () => {
      const user = userEvent.setup()
      render(<ContactForm mode="hi" />)

      await user.type(screen.getByLabelText(/your name/i), 'Jane')
      await user.type(screen.getByLabelText(/your email/i), 'jane@example.com')
      await user.type(screen.getByLabelText(/your message/i), 'Hi!')
      await user.click(screen.getByRole('button', { name: /submit/i }))

      await user.click(screen.getByRole('button', { name: /send another message/i }))
      expect(screen.getByTestId('contact-form')).toBeInTheDocument()
      expect(screen.getByLabelText(/your name/i)).toHaveValue('')
    })

    it('requires name field', () => {
      render(<ContactForm mode="hi" />)

      expect(screen.getByLabelText(/your name/i)).toBeRequired()
    })

    it('requires email field', () => {
      render(<ContactForm mode="hi" />)

      expect(screen.getByLabelText(/your email/i)).toBeRequired()
    })

    it('requires message field', () => {
      render(<ContactForm mode="hi" />)

      expect(screen.getByLabelText(/your message/i)).toBeRequired()
    })

    it('textarea has four rows', () => {
      render(<ContactForm mode="hi" />)

      expect(screen.getByLabelText(/your message/i)).toHaveAttribute('rows', '4')
    })
  })

  describe('in quote mode', () => {
    it('renders all fields including service and budget', () => {
      render(<ContactForm mode="quote" />)

      expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/your email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/needed services/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/budget/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/your message/i)).toBeInTheDocument()
    })

    it('service select is required', () => {
      render(<ContactForm mode="quote" />)

      expect(screen.getByLabelText(/needed services/i)).toBeRequired()
    })

    it('budget select is required', () => {
      render(<ContactForm mode="quote" />)

      expect(screen.getByLabelText(/budget/i)).toBeRequired()
    })

    it('allows selecting a service', async () => {
      const user = userEvent.setup()
      render(<ContactForm mode="quote" />)

      await user.selectOptions(screen.getByLabelText(/needed services/i), 'Web Design')
      expect(screen.getByLabelText(/needed services/i)).toHaveValue('Web Design')
    })

    it('allows selecting a budget', async () => {
      const user = userEvent.setup()
      render(<ContactForm mode="quote" />)

      await user.selectOptions(screen.getByLabelText(/budget/i), '$1,000 - $5,000')
      expect(screen.getByLabelText(/budget/i)).toHaveValue('$1,000 - $5,000')
    })

    it('submits with all data including service and budget', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn()
      render(<ContactForm mode="quote" onSubmit={onSubmit} />)

      await user.type(screen.getByLabelText(/your name/i), 'Jane')
      await user.type(screen.getByLabelText(/your email/i), 'jane@example.com')
      await user.selectOptions(screen.getByLabelText(/needed services/i), 'Web Design')
      await user.selectOptions(screen.getByLabelText(/budget/i), '$1,000 - $5,000')
      await user.type(screen.getByLabelText(/your message/i), 'Need a site')
      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(onSubmit).toHaveBeenCalledWith({
        name: 'Jane',
        email: 'jane@example.com',
        message: 'Need a site',
        service: 'Web Design',
        budget: '$1,000 - $5,000',
      })
    })
  })
})
