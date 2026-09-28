import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('Regify — Account Application Form', () => {
  describe('page layout', () => {
    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('Regify — Account Application Form')
    })

    it('renders a full-page background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper).toHaveClass('bg-cover')
      expect(wrapper).toHaveClass('bg-center')
    })

    it('has a background image URL', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper.style.backgroundImage).toContain('picsum.photos')
    })

    it('centers content vertically and horizontally', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper).toHaveClass('flex')
      expect(wrapper).toHaveClass('items-center')
      expect(wrapper).toHaveClass('justify-center')
    })
  })

  describe('signup card', () => {
    it('renders a white card with max width', () => {
      render(<App />)
      const card = document.querySelector('.bg-card')
      expect(card).toBeInTheDocument()
      expect(card).toHaveClass('max-w-[660px]')
    })

    it('card has rounded corners', () => {
      render(<App />)
      const card = document.querySelector('.bg-card')
      expect(card).toHaveClass('rounded-[10px]')
    })

    it('renders "Create account" heading', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveTextContent('Create account')
    })

    it('heading is uppercase and bold', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveClass('uppercase')
      expect(heading).toHaveClass('font-black')
    })

    it('heading is centered', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveClass('text-center')
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
      const input = screen.getByLabelText(/your email/i)
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'email')
      expect(input).toHaveAttribute('placeholder', 'Your Email')
    })

    it('has a password input', () => {
      render(<App />)
      const input = screen.getByLabelText(/^password$/i)
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'password')
      expect(input).toHaveAttribute('placeholder', 'Password')
    })

    it('has a repeat password input', () => {
      render(<App />)
      const input = screen.getByLabelText(/repeat your password/i)
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'password')
      expect(input).toHaveAttribute('placeholder', 'Repeat your password')
    })

    it('has a terms checkbox', () => {
      render(<App />)
      const checkbox = screen.getByLabelText(/i agree all statements/i)
      expect(checkbox).toBeInTheDocument()
      expect(checkbox).toHaveAttribute('type', 'checkbox')
    })

    it('has a "Sign up" button', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('has a "Terms of service" link', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /terms of service/i })
      expect(link).toHaveAttribute('href', '#terms')
    })

    it('has a "Login here" link', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /login here/i })
      expect(link).toBeInTheDocument()
    })

    it('displays "Have already an account?" text', () => {
      render(<App />)
      expect(screen.getByText(/have already an account/i)).toBeInTheDocument()
    })

    it('login link points to #login', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /login here/i })
      expect(link).toHaveAttribute('href', '#login')
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
      const input = screen.getByLabelText(/your email/i)
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

    it('accepts repeat password input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/repeat your password/i)
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
    it('inputs have border', () => {
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      expect(input).toHaveClass('border-border')
    })

    it('inputs are rounded', () => {
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      expect(input).toHaveClass('rounded-[5px]')
    })

    it('inputs have outline-none', () => {
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      expect(input).toHaveClass('outline-none')
    })

    it('submit button has gradient background', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('bg-gradient-to-l')
    })

    it('submit button is uppercase', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('uppercase')
    })

    it('submit button is full width', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('w-full')
    })

    it('submit button has bold text', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('font-bold')
    })

    it('submit button is rounded', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('rounded-[5px]')
    })

    it('submit button has white text', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('text-white')
    })

    it('submit button has pointer cursor', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /sign up/i })
      expect(button).toHaveClass('cursor-pointer')
    })

    it('inputs have padding', () => {
      render(<App />)
      const input = screen.getByLabelText(/your name/i)
      expect(input).toHaveClass('py-[17px]')
      expect(input).toHaveClass('px-5')
    })

    it('password toggle is positioned absolutely', () => {
      render(<App />)
      const toggle = screen.getByRole('button', { name: /show password/i })
      expect(toggle).toHaveClass('absolute')
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
    it('card has horizontal padding on mobile', () => {
      render(<App />)
      const card = document.querySelector('.bg-card')
      expect(card).toHaveClass('max-sm:px-[25px]')
    })

    it('card has larger padding on desktop', () => {
      render(<App />)
      const card = document.querySelector('.bg-card')
      expect(card).toHaveClass('px-[85px]')
    })
  })
})
