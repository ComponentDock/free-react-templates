import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  describe('Page renders the login card centered on viewport', () => {
    it('renders a centered card with two columns', () => {
      render(<LoginForm />)
      const card = screen.getByRole('region', { name: /login card/i })
      expect(card).toBeInTheDocument()
      const innerCard = card.querySelector('.rounded')
      expect(innerCard).toBeInTheDocument()
    })
  })

  describe('Left column displays the sign-in form', () => {
    it('displays the Sign In heading', () => {
      render(<LoginForm />)
      expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
    })

    it('displays social icons as buttons with aria-labels', () => {
      render(<LoginForm />)
      const facebookBtn = screen.getByRole('button', { name: /facebook/i })
      const twitterBtn = screen.getByRole('button', { name: /twitter/i })
      expect(facebookBtn).toBeInTheDocument()
      expect(twitterBtn).toBeInTheDocument()
    })

    it('displays the username label with uppercase styling', () => {
      render(<LoginForm />)
      const label = screen.getByText('Username', { selector: 'label' })
      expect(label).toBeInTheDocument()
      expect(label).toHaveClass('uppercase')
    })

    it('displays a username input with placeholder', () => {
      render(<LoginForm />)
      expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    })

    it('displays the password label with uppercase styling', () => {
      render(<LoginForm />)
      const label = screen.getByText('Password', { selector: 'label' })
      expect(label).toBeInTheDocument()
      expect(label).toHaveClass('uppercase')
    })

    it('displays a password input with placeholder', () => {
      render(<LoginForm />)
      expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    })
  })

  describe('Inputs have pill/rounded style', () => {
    it('username input has rounded pill shape', () => {
      render(<LoginForm />)
      const input = screen.getByPlaceholderText('Username')
      expect(input).toHaveClass('rounded-full')
    })

    it('password input has rounded pill shape', () => {
      render(<LoginForm />)
      const input = screen.getByPlaceholderText('Password')
      expect(input).toHaveClass('rounded-full')
    })

    it('inputs have light gray background', () => {
      render(<LoginForm />)
      const username = screen.getByPlaceholderText('Username')
      const password = screen.getByPlaceholderText('Password')
      expect(username).toHaveClass('bg-gray-100')
      expect(password).toHaveClass('bg-gray-100')
    })
  })

  describe('Sign In button is coral colored', () => {
    it('renders the Sign In button with coral background', () => {
      render(<LoginForm />)
      const button = screen.getByRole('button', { name: /^sign in$/i })
      expect(button).toHaveClass('bg-coral-300')
    })

    it('is full width within the left column', () => {
      render(<LoginForm />)
      const button = screen.getByRole('button', { name: /^sign in$/i })
      expect(button).toHaveClass('w-full')
    })

    it('has rounded pill corners', () => {
      render(<LoginForm />)
      const button = screen.getByRole('button', { name: /^sign in$/i })
      expect(button).toHaveClass('rounded-full')
    })

    it('displays Sign In in white text', () => {
      render(<LoginForm />)
      const button = screen.getByRole('button', { name: /^sign in$/i })
      expect(button).toHaveClass('text-white')
    })
  })

  describe('Remember Me checkbox toggle', () => {
    it('is checked by default', () => {
      render(<LoginForm />)
      const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
      expect(checkbox).toBeChecked()
    })

    it('toggles when clicked', async () => {
      const user = userEvent.setup()
      render(<LoginForm />)
      const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
      expect(checkbox).toBeChecked()
      await user.click(checkbox)
      expect(checkbox).not.toBeChecked()
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
    })

    it('displays coral-colored Remember Me label', () => {
      render(<LoginForm />)
      const label = screen.getByText('Remember Me')
      expect(label).toHaveClass('text-coral-300')
    })
  })

  describe('Forgot Password link', () => {
    it('renders a Forgot Password link', () => {
      render(<LoginForm />)
      const link = screen.getByRole('link', { name: /forgot password/i })
      expect(link).toBeInTheDocument()
    })

    it('is styled in gray text', () => {
      render(<LoginForm />)
      const link = screen.getByRole('link', { name: /forgot password/i })
      expect(link).toHaveClass('text-gray-400')
    })
  })

  describe('Right column displays welcome content', () => {
    it('displays coral gradient background on the right column', () => {
      render(<LoginForm />)
      const panel = screen.getByRole('complementary', { name: /welcome panel/i })
      expect(panel).toHaveClass('bg-gradient-to-b')
    })

    it('displays Welcome to login heading in white', () => {
      render(<LoginForm />)
      const heading = screen.getByRole('heading', { name: /welcome to login/i })
      expect(heading).toHaveClass('text-white')
    })

    it("displays Don't have an account text in white", () => {
      render(<LoginForm />)
      const text = screen.getByText("Don't have an account?")
      expect(text).toHaveClass('text-white')
    })

    it('displays a Sign Up outline button', () => {
      render(<LoginForm />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('border-2')
      expect(button).toHaveClass('border-white')
      expect(button).toHaveClass('text-white')
      expect(button).toHaveClass('bg-transparent')
    })
  })

  describe('Social icons are interactive', () => {
    it('each social icon is a clickable button with aria-label', () => {
      render(<LoginForm />)
      const facebookBtn = screen.getByRole('button', { name: /facebook/i })
      const twitterBtn = screen.getByRole('button', { name: /twitter/i })
      expect(facebookBtn).toHaveAttribute('aria-label')
      expect(twitterBtn).toHaveAttribute('aria-label')
    })
  })

  describe('Responsive layout', () => {
    it('applies responsive classes for stacking on mobile', () => {
      render(<LoginForm />)
      const card = screen.getByRole('region', { name: /login card/i })
      expect(card.querySelector('[data-left-column]')).toHaveClass('sm:w-1/2')
    })
  })
})
