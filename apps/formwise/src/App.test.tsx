import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('Formwise — Creative Signup Form', () => {
  describe('page layout', () => {
    it('renders a light gray background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper).toHaveClass('bg-surface')
    })

    it('sets the document title', () => {
      render(<App />)
      expect(document.title).toBe('Formwise — Creative Signup Form')
    })

    it('renders two signup form cards', () => {
      const { container } = render(<App />)
      const cards = container.querySelectorAll('.max-w-\\[900px\\]')
      expect(cards.length).toBe(2)
    })
  })

  describe('signup form card', () => {
    it('renders a white card with shadow', () => {
      render(<App />)
      const card = document.querySelector('.bg-card')
      expect(card).toBeInTheDocument()
      expect(card).toHaveClass('shadow-[0_2px_20px_rgba(0,0,0,0.08)]')
    })

    it('renders "Sign up" heading', () => {
      render(<App />)
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBeGreaterThanOrEqual(1)
      expect(headings[0]).toHaveTextContent('Sign up')
    })

    it('has two "Sign up" headings for two forms', () => {
      render(<App />)
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.length).toBe(2)
    })
  })

  describe('form fields — first form', () => {
    it('has a name input', () => {
      render(<App />)
      const inputs = screen.getAllByLabelText(/your name/i)
      expect(inputs.length).toBeGreaterThanOrEqual(1)
    })

    it('has an email input', () => {
      render(<App />)
      const inputs = screen.getAllByLabelText(/your email/i)
      expect(inputs.length).toBeGreaterThanOrEqual(1)
    })

    it('has password inputs', () => {
      render(<App />)
      const pwInputs = screen.getAllByLabelText(/^password$/i)
      expect(pwInputs.length).toBeGreaterThanOrEqual(1)
    })

    it('has repeat password inputs', () => {
      render(<App />)
      const rpInputs = screen.getAllByLabelText(/repeat your password/i)
      expect(rpInputs.length).toBeGreaterThanOrEqual(1)
    })

    it('has terms checkbox', () => {
      render(<App />)
      const checkboxes = screen.getAllByLabelText(/i agree all statements/i)
      expect(checkboxes.length).toBeGreaterThanOrEqual(1)
    })

    it('has a register button', () => {
      render(<App />)
      const buttons = screen.getAllByRole('button', { name: /register/i })
      expect(buttons.length).toBeGreaterThanOrEqual(1)
    })

    it('has a "Terms of service" link', () => {
      render(<App />)
      const links = screen.getAllByRole('link', { name: /terms of service/i })
      expect(links.length).toBeGreaterThanOrEqual(1)
    })

    it('has an "I am already member" link', () => {
      render(<App />)
      const links = screen.getAllByRole('link', { name: /i am already member/i })
      expect(links.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('form fields — second form (mirrored)', () => {
    it('has a name input in the second form', () => {
      render(<App />)
      const inputs = screen.getAllByLabelText(/your name/i)
      expect(inputs.length).toBe(2)
    })

    it('has an email input in the second form', () => {
      render(<App />)
      const inputs = screen.getAllByLabelText(/your email/i)
      expect(inputs.length).toBe(2)
    })

    it('has password input in the second form', () => {
      render(<App />)
      const inputs = screen.getAllByLabelText(/^password$/i)
      expect(inputs.length).toBe(2)
    })

    it('has repeat password input in the second form', () => {
      render(<App />)
      const inputs = screen.getAllByLabelText(/repeat your password/i)
      expect(inputs.length).toBe(2)
    })

    it('has register button in the second form', () => {
      render(<App />)
      const buttons = screen.getAllByRole('button', { name: /register/i })
      expect(buttons.length).toBe(2)
    })

    it('has terms checkbox in the second form', () => {
      render(<App />)
      const checkboxes = screen.getAllByLabelText(/i agree all statements/i)
      expect(checkboxes.length).toBe(2)
    })

    it('has "I am already member" link in the second form', () => {
      render(<App />)
      const links = screen.getAllByRole('link', { name: /i am already member/i })
      expect(links.length).toBe(2)
    })
  })

  describe('form interaction', () => {
    it('accepts text input in name field', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getAllByLabelText(/your name/i)[0]!
      await user.type(input, 'Jane Doe')
      expect(input).toHaveValue('Jane Doe')
    })

    it('accepts email input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getAllByLabelText(/your email/i)[0]!
      await user.type(input, 'jane@example.com')
      expect(input).toHaveValue('jane@example.com')
    })

    it('accepts password input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getAllByLabelText(/^password$/i)[0]!
      await user.type(input, 'secret123')
      expect(input).toHaveValue('secret123')
    })

    it('accepts repeat password input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getAllByLabelText(/repeat your password/i)[0]!
      await user.type(input, 'secret123')
      expect(input).toHaveValue('secret123')
    })

    it('toggles terms checkbox', async () => {
      const user = userEvent.setup()
      render(<App />)
      const checkbox = screen.getAllByLabelText(/i agree all statements/i)[0]!
      expect(checkbox).not.toBeChecked()
      await user.click(checkbox)
      expect(checkbox).toBeChecked()
    })

    it('prevents default form submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      const button = screen.getAllByRole('button', { name: /register/i })[0]!
      await user.click(button)
      // Form should not navigate or throw
      expect(button).toBeInTheDocument()
    })
  })

  describe('form styling', () => {
    it('inputs have transparent background', () => {
      render(<App />)
      const input = screen.getAllByLabelText(/your name/i)[0]
      expect(input).toHaveClass('bg-transparent')
    })

    it('inputs use outline-none for underline style', () => {
      render(<App />)
      const input = screen.getAllByLabelText(/your name/i)[0]
      expect(input).toHaveClass('outline-none')
    })

    it('register button has brand color', () => {
      render(<App />)
      const button = screen.getAllByRole('button', { name: /register/i })[0]
      expect(button).toHaveClass('bg-brand')
    })

    it('register button has white text', () => {
      render(<App />)
      const button = screen.getAllByRole('button', { name: /register/i })[0]
      expect(button).toHaveClass('text-white')
    })

    it('register button is rounded', () => {
      render(<App />)
      const button = screen.getAllByRole('button', { name: /register/i })[0]
      expect(button).toHaveClass('rounded')
    })

    it('register button has pointer cursor', () => {
      render(<App />)
      const button = screen.getAllByRole('button', { name: /register/i })[0]
      expect(button).toHaveClass('cursor-pointer')
    })

    it('form fields have border-bottom for underline style', () => {
      const { container } = render(<App />)
      const borders = container.querySelectorAll('.border-b')
      expect(borders.length).toBeGreaterThanOrEqual(4)
    })

    it('first card has illustration on the right side', () => {
      const { container } = render(<App />)
      const cards = container.querySelectorAll('.bg-card')
      const firstCard = cards[0]
      // First card should have flex-row (not flex-row-reverse)
      const flexContainer = firstCard?.querySelector('.flex')
      expect(flexContainer).toHaveClass('md:flex-row')
    })

    it('second card has illustration on the left side (reversed)', () => {
      const { container } = render(<App />)
      const cards = container.querySelectorAll('.bg-card')
      const secondCard = cards[1]
      const flexContainer = secondCard?.querySelector('.flex')
      expect(flexContainer).toHaveClass('md:flex-row-reverse')
    })
  })

  describe('illustrations', () => {
    it('renders SVG illustrations', () => {
      const { container } = render(<App />)
      const svgs = container.querySelectorAll('svg[aria-hidden="true"]')
      expect(svgs.length).toBeGreaterThanOrEqual(2)
    })

    it('illustrations are hidden from screen readers', () => {
      const { container } = render(<App />)
      const svgs = container.querySelectorAll('svg[aria-hidden="true"]')
      svgs.forEach((svg) => {
        expect(svg).toHaveAttribute('aria-hidden', 'true')
      })
    })
  })

  describe('lucide icons', () => {
    it('renders user icons', () => {
      const { container } = render(<App />)
      const svgs = container.querySelectorAll('svg.lucide-user')
      expect(svgs.length).toBeGreaterThanOrEqual(1)
    })

    it('renders mail icons', () => {
      const { container } = render(<App />)
      const svgs = container.querySelectorAll('svg.lucide-mail')
      expect(svgs.length).toBeGreaterThanOrEqual(1)
    })

    it('renders lock icons', () => {
      const { container } = render(<App />)
      const svgs = container.querySelectorAll('svg.lucide-lock')
      expect(svgs.length).toBeGreaterThanOrEqual(2)
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
  })

  describe('responsive layout', () => {
    it('first form side has form fields visible', () => {
      render(<App />)
      const nameInputs = screen.getAllByLabelText(/your name/i)
      expect(nameInputs[0]).toBeVisible()
    })

    it('cards are centered with max width', () => {
      const { container } = render(<App />)
      const cards = container.querySelectorAll('.mx-auto')
      expect(cards.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('terms of service link', () => {
    it('points to #terms', () => {
      render(<App />)
      const links = screen.getAllByRole('link', { name: /terms of service/i })
      links.forEach((link) => {
        expect(link).toHaveAttribute('href', '#terms')
      })
    })
  })

  describe('already member link', () => {
    it('points to #login', () => {
      render(<App />)
      const links = screen.getAllByRole('link', { name: /i am already member/i })
      links.forEach((link) => {
        expect(link).toHaveAttribute('href', '#login')
      })
    })
  })
})
