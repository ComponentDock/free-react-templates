import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Signdrop — Registration Form', () => {
  describe('Page rendering', () => {
    it('renders the Register heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1, name: /register/i })).toBeInTheDocument()
    })

    it('renders the subtitle text', () => {
      render(<App />)
      expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    })
  })

  describe('Form fields', () => {
    it('renders an email input', () => {
      render(<App />)
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })

    it('renders a password input', () => {
      render(<App />)
      expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    })

    it('renders a re-type password input', () => {
      render(<App />)
      expect(screen.getByLabelText(/re-type password/i)).toBeInTheDocument()
    })

    it('terms checkbox is unchecked by default', () => {
      render(<App />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).not.toBeChecked()
    })
  })

  describe('User interactions', () => {
    it('allows typing in the email field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const emailInput = screen.getByLabelText(/email/i)
      await user.type(emailInput, 'test@example.com')
      expect(emailInput).toHaveValue('test@example.com')
    })

    it('allows typing in the password field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const passwordInput = screen.getByLabelText(/^password$/i)
      await user.type(passwordInput, 'secret123')
      expect(passwordInput).toHaveValue('secret123')
    })

    it('allows typing in the re-type password field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const confirmInput = screen.getByLabelText(/re-type password/i)
      await user.type(confirmInput, 'secret123')
      expect(confirmInput).toHaveValue('secret123')
    })

    it('allows toggling the terms checkbox', async () => {
      const user = userEvent.setup()
      render(<App />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).not.toBeChecked()
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
    })

    it('submits the form without page reload', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/email/i), 'a@b.com')
      await user.type(screen.getByLabelText(/^password$/i), 'pass')
      await user.type(screen.getByLabelText(/re-type password/i), 'pass')
      await user.click(screen.getByRole('button', { name: /register$/i }))
    })
  })

  describe('Social buttons', () => {
    it('renders Register with Facebook button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /register with facebook/i })).toBeInTheDocument()
    })

    it('renders Register with Twitter button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /register with twitter/i })).toBeInTheDocument()
    })

    it('renders Register with Google button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /register with google/i })).toBeInTheDocument()
    })
  })

  describe('Footer', () => {
    it('links to Component Dock', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })

    it('opens in a new tab', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
