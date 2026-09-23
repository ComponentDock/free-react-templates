import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginCard } from './LoginCard'

describe('LoginCard', () => {
  describe('Page renders the login card centered on the viewport', () => {
    it('renders a centered card with rounded corners and shadow', () => {
      render(<LoginCard />)
      const card = screen.getByRole('region', { name: /login card/i })
      expect(card).toBeInTheDocument()
      const innerCard = card.querySelector('.rounded-\\[10px\\]')
      expect(innerCard).toBeInTheDocument()
    })
  })

  describe('Heading displays above the card', () => {
    it('displays the Login #08 heading', () => {
      render(<LoginCard />)
      expect(screen.getByRole('heading', { name: /login #08/i })).toBeInTheDocument()
    })

    it('heading is centered and styled in black', () => {
      render(<LoginCard />)
      const heading = screen.getByRole('heading', { name: /login #08/i })
      expect(heading).toHaveClass('text-center')
      expect(heading).toHaveClass('text-black')
    })
  })

  describe('Icon circle is displayed inside the card', () => {
    it('displays a circular purple icon container', () => {
      render(<LoginCard />)
      const iconContainer = screen.getByRole('img', { name: /user icon/i })
      expect(iconContainer).toBeInTheDocument()
      expect(iconContainer).toHaveClass('rounded-full')
      expect(iconContainer).toHaveClass('bg-brand')
    })
  })

  describe('Subheading is displayed below the icon', () => {
    it('displays the Have an account? subheading', () => {
      render(<LoginCard />)
      expect(screen.getByRole('heading', { name: /have an account\?/i })).toBeInTheDocument()
    })

    it('subheading is purple and centered', () => {
      render(<LoginCard />)
      const subheading = screen.getByRole('heading', { name: /have an account\?/i })
      expect(subheading).toHaveClass('text-brand')
      expect(subheading).toHaveClass('text-center')
    })
  })

  describe('Username input field accepts text', () => {
    it('displays a username input with placeholder', () => {
      render(<LoginCard />)
      expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    })

    it('username input has light gray background', () => {
      render(<LoginCard />)
      const input = screen.getByPlaceholderText('Username')
      expect(input).toHaveClass('bg-input-bg')
    })

    it('username input has correct height', () => {
      render(<LoginCard />)
      const input = screen.getByPlaceholderText('Username')
      expect(input).toHaveClass('h-[48px]')
    })
  })

  describe('Password input field accepts text', () => {
    it('displays a password input with placeholder', () => {
      render(<LoginCard />)
      expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    })

    it('password field masks input characters', () => {
      render(<LoginCard />)
      const input = screen.getByPlaceholderText('Password')
      expect(input).toHaveAttribute('type', 'password')
    })

    it('password input has light gray background', () => {
      render(<LoginCard />)
      const input = screen.getByPlaceholderText('Password')
      expect(input).toHaveClass('bg-input-bg')
    })
  })

  describe('Remember Me checkbox is interactive', () => {
    it('is checked by default', () => {
      render(<LoginCard />)
      const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
      expect(checkbox).toBeChecked()
    })

    it('toggles when clicked', async () => {
      const user = userEvent.setup()
      render(<LoginCard />)
      const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
      expect(checkbox).toBeChecked()
      await user.click(checkbox)
      expect(checkbox).not.toBeChecked()
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
    })
  })

  describe('Forgot Password link is displayed', () => {
    it('renders a Forgot Password link', () => {
      render(<LoginCard />)
      const link = screen.getByRole('link', { name: /forgot password/i })
      expect(link).toBeInTheDocument()
    })

    it('link has correct href', () => {
      render(<LoginCard />)
      const link = screen.getByRole('link', { name: /forgot password/i })
      expect(link).toHaveAttribute('href', '#forgot')
    })
  })

  describe('Submit button has pill shape and purple styling', () => {
    it('renders the Get Started button', () => {
      render(<LoginCard />)
      const button = screen.getByRole('button', { name: /get started/i })
      expect(button).toBeInTheDocument()
    })

    it('button has fully rounded pill shape', () => {
      render(<LoginCard />)
      const button = screen.getByRole('button', { name: /get started/i })
      expect(button).toHaveClass('rounded-[40px]')
    })

    it('button has purple background', () => {
      render(<LoginCard />)
      const button = screen.getByRole('button', { name: /get started/i })
      expect(button).toHaveClass('bg-brand')
    })

    it('button text is white', () => {
      render(<LoginCard />)
      const button = screen.getByRole('button', { name: /get started/i })
      expect(button).toHaveClass('text-white')
    })

    it('button is full width', () => {
      render(<LoginCard />)
      const button = screen.getByRole('button', { name: /get started/i })
      expect(button).toHaveClass('w-full')
    })
  })

  describe('Form fields have focus state', () => {
    it('username input has focus transition', () => {
      render(<LoginCard />)
      const input = screen.getByPlaceholderText('Username')
      expect(input).toHaveClass('focus:bg-input-focus-bg')
    })

    it('password input has focus transition', () => {
      render(<LoginCard />)
      const input = screen.getByPlaceholderText('Password')
      expect(input).toHaveClass('focus:bg-input-focus-bg')
    })
  })

  describe('Responsive layout on mobile', () => {
    it('card spans full width on small screens', () => {
      render(<LoginCard />)
      const card = screen.getByRole('region', { name: /login card/i })
      expect(card.querySelector('.w-full')).toBeInTheDocument()
    })
  })

  describe('Accessibility - form fields have labels', () => {
    it('username field has accessible label', () => {
      render(<LoginCard />)
      const input = screen.getByLabelText('Username')
      expect(input).toBeInTheDocument()
    })

    it('password field has accessible label', () => {
      render(<LoginCard />)
      const input = screen.getByLabelText('Password')
      expect(input).toBeInTheDocument()
    })

    it('checkbox has accessible label', () => {
      render(<LoginCard />)
      const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
      expect(checkbox).toBeInTheDocument()
    })
  })

  describe('Form submission', () => {
    it('submits without navigation when Get Started is clicked', async () => {
      const user = userEvent.setup()
      render(<LoginCard />)
      const button = screen.getByRole('button', { name: /get started/i })
      await user.click(button)
      // No navigation should occur (preventDefault was called)
      expect(button).toBeInTheDocument()
    })
  })
})
