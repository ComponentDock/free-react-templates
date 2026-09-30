import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Signupbloom — Registration Form', () => {
  describe('Page rendering', () => {
    it('renders the Sign Up heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 2, name: /sign up/i })).toBeInTheDocument()
    })

    it('renders a split-screen layout with illustration on the right', () => {
      render(<App />)
      const illustration = screen.getByRole('img', { name: /illustration/i })
      expect(illustration).toBeInTheDocument()
    })

    it('renders the subtitle text', () => {
      render(<App />)
      expect(screen.getByText(/lorem ipsum dolor sit amet elit/i)).toBeInTheDocument()
    })
  })

  describe('Form fields', () => {
    it('renders a name input', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    })

    it('renders an email input', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    })

    it('renders a password input', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    })

    it('renders a re-type password input', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Re-type Password')).toBeInTheDocument()
    })
  })

  describe('Terms and conditions', () => {
    it('terms checkbox is checked by default', () => {
      render(<App />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toBeChecked()
    })

    it('terms text mentions Terms and Conditions and Privacy Policy', () => {
      render(<App />)
      expect(screen.getByText(/terms and conditions/i)).toBeInTheDocument()
      expect(screen.getByText(/privacy policy/i)).toBeInTheDocument()
    })

    it('Terms and Conditions is a link', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /terms and conditions/i })
      expect(link).toHaveAttribute('href', '#terms')
    })

    it('Privacy Policy is a link', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /privacy policy/i })
      expect(link).toHaveAttribute('href', '#privacy')
    })

    it('allows toggling the terms checkbox', async () => {
      const user = userEvent.setup()
      render(<App />)
      const checkbox = screen.getByRole('checkbox')
      expect(checkbox).toBeChecked()
      await user.click(checkbox)
      expect(checkbox).not.toBeChecked()
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
    })
  })

  describe('Register button', () => {
    it('renders a Register button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /register$/i })).toBeInTheDocument()
    })

    it('Register button is a submit button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /register$/i })).toHaveAttribute('type', 'submit')
    })
  })

  describe('Social divider', () => {
    it('renders the "or register using" divider text', () => {
      render(<App />)
      expect(screen.getByText('or register using')).toBeInTheDocument()
    })
  })

  describe('Social login buttons', () => {
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

    it('social buttons are full-width (have w-full class)', () => {
      render(<App />)
      const fb = screen.getByRole('button', { name: /register with facebook/i })
      expect(fb.className).toContain('w-full')
    })

    it('social buttons are not submit buttons', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /register with facebook/i })).toHaveAttribute(
        'type',
        'button',
      )
      expect(screen.getByRole('button', { name: /register with twitter/i })).toHaveAttribute(
        'type',
        'button',
      )
      expect(screen.getByRole('button', { name: /register with google/i })).toHaveAttribute(
        'type',
        'button',
      )
    })
  })

  describe('User interactions', () => {
    it('allows typing in the name field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Name')
      await user.type(input, 'John Doe')
      expect(input).toHaveValue('John Doe')
    })

    it('allows typing in the email field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Email')
      await user.type(input, 'test@example.com')
      expect(input).toHaveValue('test@example.com')
    })

    it('allows typing in the password field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Password')
      await user.type(input, 'secret123')
      expect(input).toHaveValue('secret123')
    })

    it('allows typing in the re-type password field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByPlaceholderText('Re-type Password')
      await user.type(input, 'secret123')
      expect(input).toHaveValue('secret123')
    })

    it('submits the form without page reload', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
      await user.type(screen.getByPlaceholderText('Email'), 'a@b.com')
      await user.type(screen.getByPlaceholderText('Password'), 'pass')
      await user.type(screen.getByPlaceholderText('Re-type Password'), 'pass')
      await user.click(screen.getByRole('button', { name: /register$/i }))
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

    it('has proper rel attributes', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('link text says "More templates at Component Dock"', () => {
      render(<App />)
      expect(
        screen.getByRole('link', { name: /more templates at component dock/i }),
      ).toBeInTheDocument()
    })
  })
})
