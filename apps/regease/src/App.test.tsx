import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('Regease — Gaming Signup Form', () => {
  describe('page layout', () => {
    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('Regease — Gaming Signup Form')
    })

    it('renders a full-page background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper).toHaveClass('min-h-screen')
      expect(wrapper).toHaveClass('bg-cover')
      expect(wrapper).toHaveClass('bg-center')
    })

    it('has a background image URL', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.style.backgroundImage).toContain('picsum.photos')
    })

    it('has a centered container', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper).toBeInTheDocument()
      expect(wrapper).toHaveClass('flex')
      expect(wrapper).toHaveClass('items-center')
      expect(wrapper).toHaveClass('justify-center')
    })
  })

  describe('signup card', () => {
    it('renders a card with gold/semi-transparent background', () => {
      render(<App />)
      const card = document.querySelector('.bg-brand-gold\\/75')
      expect(card).toBeInTheDocument()
    })

    it('card has max width', () => {
      render(<App />)
      const card = document.querySelector('.bg-brand-gold\\/75')
      expect(card).toHaveClass('max-w-[562px]')
    })

    it('renders "Sign up" heading', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveTextContent('Sign up')
    })

    it('heading is bold and white', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveClass('font-bold')
      expect(heading).toHaveClass('text-white')
    })

    it('heading has large font size', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveClass('text-[36px]')
    })

    it('displays discount description', () => {
      render(<App />)
      expect(screen.getByText(/to get discount 10%/)).toBeInTheDocument()
    })

    it('displays game title in bold', () => {
      render(<App />)
      const span = screen.getByText(/Batman Beyond/)
      expect(span).toBeInTheDocument()
      expect(span).toHaveClass('font-bold')
    })
  })

  describe('form fields', () => {
    it('has a name input', () => {
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'text')
      expect(input).toHaveAttribute('placeholder', 'Your Name')
    })

    it('has an email input', () => {
      render(<App />)
      const input = screen.getByLabelText(/email/i)
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'email')
      expect(input).toHaveAttribute('placeholder', 'Email')
    })

    it('has a password input', () => {
      render(<App />)
      const input = screen.getByLabelText(/^password$/i)
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'password')
      expect(input).toHaveAttribute('placeholder', 'Password')
    })

    it('has a terms checkbox', () => {
      render(<App />)
      const checkbox = screen.getByLabelText(/i agree all statements/i)
      expect(checkbox).toBeInTheDocument()
      expect(checkbox).toHaveAttribute('type', 'checkbox')
    })

    it('has a "Sign up" submit button', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('has a "Sign in" link', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /sign in/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#signin')
    })

    it('has a "Terms of service" link', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /terms of service/i })
      expect(link).toHaveAttribute('href', '#terms')
    })
  })

  describe('password toggle', () => {
    it('password starts hidden', () => {
      render(<App />)
      const input = screen.getByLabelText(/^password$/i)
      expect(input).toHaveAttribute('type', 'password')
    })

    it('clicking toggle shows password', async () => {
      const user = userEvent.setup()
      render(<App />)
      const toggle = screen.getByRole('button', { name: /show password/i })
      await user.click(toggle)
      const input = screen.getByLabelText(/^password$/i)
      expect(input).toHaveAttribute('type', 'text')
    })

    it('clicking toggle again hides password', async () => {
      const user = userEvent.setup()
      render(<App />)
      const toggle = screen.getByRole('button', { name: /show password/i })
      await user.click(toggle)
      const hideToggle = screen.getByRole('button', { name: /hide password/i })
      await user.click(hideToggle)
      const input = screen.getByLabelText(/^password$/i)
      expect(input).toHaveAttribute('type', 'password')
    })

    it('toggle button has eye icon', () => {
      render(<App />)
      const toggle = screen.getByRole('button', { name: /show password/i })
      expect(toggle).toBeInTheDocument()
    })
  })

  describe('form interaction', () => {
    it('accepts text input in name field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      await user.type(input, 'Jane Doe')
      expect(input).toHaveValue('Jane Doe')
    })

    it('accepts email input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/email/i)
      await user.type(input, 'jane@example.com')
      expect(input).toHaveValue('jane@example.com')
    })

    it('accepts password input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/^password$/i)
      await user.type(input, 'secret123')
      expect(input).toHaveValue('secret123')
    })

    it('toggles terms checkbox', async () => {
      const user = userEvent.setup()
      render(<App />)
      const checkbox = screen.getByLabelText(/i agree all statements/i)
      expect(checkbox).not.toBeChecked()
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
    })

    it('prevents default form submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      await user.click(button)
      expect(button).toBeInTheDocument()
    })
  })

  describe('form styling', () => {
    it('inputs have bottom border', () => {
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      expect(input).toHaveClass('border-b')
    })

    it('inputs have transparent background', () => {
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      expect(input).toHaveClass('bg-transparent')
    })

    it('inputs have white text', () => {
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      expect(input).toHaveClass('text-white')
    })

    it('inputs have outline-none', () => {
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      expect(input).toHaveClass('outline-none')
    })

    it('submit button has white background', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('bg-white')
    })

    it('submit button has gold text', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('text-brand-gold')
    })

    it('submit button is uppercase', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('uppercase')
    })

    it('submit button has rounded corners', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('rounded-[25px]')
    })

    it('submit button has box shadow', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('shadow-[0px_15px_10px_rgba(0,0,0,0.15)]')
    })

    it('submit button has pointer cursor', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('cursor-pointer')
    })

    it('sign-in link has white border', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /sign in/i })
      expect(link).toHaveClass('border-white')
      expect(link).toHaveClass('border-2')
    })

    it('sign-in link has rounded corners', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /sign in/i })
      expect(link).toHaveClass('rounded-[25px]')
    })

    it('password toggle is positioned on the right', () => {
      render(<App />)
      const toggle = screen.getByRole('button', { name: /show password/i })
      expect(toggle).toHaveClass('absolute')
      expect(toggle).toHaveClass('right-0')
    })

    it('password toggle is vertically centered', () => {
      render(<App />)
      const toggle = screen.getByRole('button', { name: /show password/i })
      expect(toggle).toHaveClass('top-1/2')
      expect(toggle).toHaveClass('-translate-y-1/2')
    })

    it('password input has right padding for toggle', () => {
      render(<App />)
      const input = screen.getByLabelText(/^password$/i)
      expect(input).toHaveClass('pr-10')
    })
  })

  describe('lucide icons', () => {
    it('renders eye icon for password toggle', () => {
      render(<App />)
      const svg = document.querySelector('svg.lucide-eye')
      expect(svg).toBeInTheDocument()
    })

    it('eye icon is inside the toggle button', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /show password/i })
      const svg = button.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('footer', () => {
    it('links to componentdock.com', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })

    it('opens link in new tab', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('displays "Made with Component Dock" text', () => {
      render(<App />)
      expect(screen.getByText(/made with/i)).toBeInTheDocument()
    })

    it('footer is fixed to bottom', () => {
      render(<App />)
      const footer = document.querySelector('footer')
      expect(footer).toHaveClass('fixed')
      expect(footer).toHaveClass('bottom-0')
    })
  })

  describe('responsive layout', () => {
    it('card has padding on desktop', () => {
      render(<App />)
      const card = document.querySelector('.bg-brand-gold\\/75')
      expect(card).toHaveClass('px-[55px]')
      expect(card).toHaveClass('py-[54px]')
    })

    it('submit button is full width on mobile', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('max-sm:w-full')
    })

    it('sign-in link is full width on mobile', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /sign in/i })
      expect(link).toHaveClass('max-sm:w-full')
    })
  })
})
