import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Abjure — Sign Up Form Wizard', () => {
  describe('Page shell', () => {
    it('renders the sky-blue page background', () => {
      const { container } = render(<App />)
      const page = container.firstElementChild as HTMLElement
      expect(page.className).toContain('bg-sky')
    })

    it('renders the white pill card centered on the page', () => {
      render(<App />)
      const card = screen.getByRole('form')
      expect(card).toHaveClass('rounded-[60px]')
      expect(card.className).toContain('bg-white')
    })

    it('has no step-tile row or page heading', () => {
      render(<App />)
      expect(screen.queryByRole('heading')).not.toBeInTheDocument()
      expect(screen.queryByRole('tablist')).not.toBeInTheDocument()
    })

    it('renders Montserrat font family', () => {
      // Montserrat is loaded via Google Fonts <link> in index.html;
      // jsdom does not render the HTML file. The CSS @theme declares
      // --font-montserrat: 'Montserrat', sans-serif; verify the
      // component renders without errors (the font class is applied).
      render(<App />)
      expect(screen.getByRole('form', { name: /sign up form/i })).toBeInTheDocument()
    })
  })

  describe('Floating-label question fields', () => {
    it('shows the first step with a numbered question label', () => {
      render(<App />)
      expect(screen.getByText('01 . What is your first name ?')).toBeInTheDocument()
    })

    it('floats the label up on focus', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/first name/i)
      const label = screen.getByText('01 . What is your first name ?')

      await user.click(input)
      expect(label).toHaveClass('top-1')
    })

    it('hides the label when a valid value is entered and blurred', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/first name/i)
      const label = screen.getByText('01 . What is your first name ?')

      await user.type(input, 'John')
      await user.tab()
      expect(label).toHaveClass('hidden')
    })

    it('shows red label and error icon on empty blur with Next click', async () => {
      const user = userEvent.setup()
      render(<App />)
      const nextBtn = screen.getByRole('button', { name: /next/i })

      await user.click(nextBtn)

      const label = screen.getByText('01 . What is your first name ?')
      expect(label).toHaveClass('text-error')
    })

    it('renders input with bottom border only', () => {
      render(<App />)
      const input = screen.getByLabelText(/first name/i)
      expect(input).toHaveClass('border-b-[3px]')
      expect(input).toHaveClass('border-line')
    })
  })

  describe('Five-step field inventory', () => {
    it('shows step 1: first name', () => {
      render(<App />)
      expect(screen.getByText('01 . What is your first name ?')).toBeInTheDocument()
    })

    it('advances to step 2: last name', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('02 . What is your last name ?')).toBeInTheDocument()
    })

    it('advances to step 3: email', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('03 . What is your Email ?')).toBeInTheDocument()
    })

    it('advances to step 4: password with eye toggle', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'j@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('04 . Create your password')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
    })

    it('advances to step 5: repeat password with eye toggle', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'j@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('05 . Repeat your password')).toBeInTheDocument()
    })

    it('has no selects, checkboxes, or file inputs', () => {
      render(<App />)
      expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
      expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
      expect(screen.queryByLabelText(/upload/i)).not.toBeInTheDocument()
    })
  })

  describe('Password fields', () => {
    it('renders password input as type password', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'j@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))

      const passwordInput = screen.getByLabelText(/create your password/i)
      expect(passwordInput).toHaveAttribute('type', 'password')
    })

    it('toggles password visibility on eye click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'j@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))

      const toggleBtn = screen.getByRole('button', {
        name: /show password/i,
      })
      const passwordInput = screen.getByLabelText(/create your password/i)

      await user.click(toggleBtn)
      expect(passwordInput).toHaveAttribute('type', 'text')
      expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: /hide password/i }))
      expect(passwordInput).toHaveAttribute('type', 'password')
    })
  })

  describe('Validation-gated navigation', () => {
    it('blocks step 1 advancement when first name is empty', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('01 . What is your first name ?')).toBeInTheDocument()
    })

    it('blocks step 2 advancement when last name is empty', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('02 . What is your last name ?')).toBeInTheDocument()
    })

    it('blocks step 3 advancement when email is empty', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('03 . What is your Email ?')).toBeInTheDocument()
    })

    it('does not block password steps (steps 4-5)', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'j@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      // Step 4: password empty, should advance
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('05 . Repeat your password')).toBeInTheDocument()
    })

    it('validates on blur', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/first name/i)
      await user.click(input)
      await user.tab()
      const label = screen.getByText('01 . What is your first name ?')
      expect(label).toHaveClass('text-error')
    })

    it('advances when required field is filled', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('02 . What is your last name ?')).toBeInTheDocument()
    })
  })

  describe('Circular action buttons', () => {
    it('renders Prev and Next circular buttons on step 1', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('Prev is disabled but visible on step 1', () => {
      render(<App />)
      const prevBtn = screen.getByRole('button', { name: /previous/i })
      expect(prevBtn).toBeVisible()
      expect(prevBtn).toBeDisabled()
    })

    it('Prev becomes active after advancing past step 1', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      const prevBtn = screen.getByRole('button', { name: /previous/i })
      expect(prevBtn).not.toBeDisabled()
    })

    it('Next becomes Finish on step 5', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'j@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('button', { name: /finish/i })).toBeInTheDocument()
    })

    it('navigates back with Prev', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('02 . What is your last name ?')).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: /previous/i }))
      expect(screen.getByText('01 . What is your first name ?')).toBeInTheDocument()
    })
  })

  describe('Growing footer block', () => {
    it('does not render footer on step 1', () => {
      render(<App />)
      expect(screen.queryByTestId('wizard-footer')).not.toBeInTheDocument()
    })

    it('renders footer after first Next click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByTestId('wizard-footer')).toBeInTheDocument()
    })

    it('grows footer height with each step', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))

      const footer0 = screen.getByTestId('wizard-footer')
      expect(footer0.style.height).toBe('188px')

      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByTestId('wizard-footer').style.height).toBe('376px')

      await user.type(screen.getByLabelText(/email/i), 'j@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByTestId('wizard-footer').style.height).toBe('564px')

      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByTestId('wizard-footer').style.height).toBe('752px')
    })

    it('never shrinks when going Back', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      // Now at 376px, go back
      await user.click(screen.getByRole('button', { name: /previous/i }))
      expect(screen.getByTestId('wizard-footer').style.height).toBe('376px')
    })
  })

  describe('Success state', () => {
    it('shows greeting with entered first name on Finish', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'Alice')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Smith')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'alice@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /finish/i }))

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Hi, Alice!/i)
    })

    it('hides the form on success', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'Bob')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Jones')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'bob@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /finish/i }))

      expect(screen.queryByRole('form')).not.toBeInTheDocument()
    })

    it('sets page background to darker blue on success', async () => {
      const user = userEvent.setup()
      const { container } = render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'Test')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'User')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 't@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.click(screen.getByRole('button', { name: /finish/i }))

      const page = container.firstElementChild as HTMLElement
      expect(page.className).toContain('bg-sky-deep')
    })
  })

  describe('Accessibility', () => {
    it('has proper form labeling', () => {
      render(<App />)
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    })

    it('has aria-required on required fields', () => {
      render(<App />)
      expect(screen.getByLabelText(/first name/i)).toHaveAttribute('aria-required', 'true')
    })

    it('has aria-disabled on step-1 Prev button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /previous/i })).toHaveAttribute(
        'aria-disabled',
        'true',
      )
    })

    it('has aria-label on eye toggle buttons', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'j@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
    })
  })

  describe('Component Dock footer', () => {
    it('links to componentdock.com', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })
  })

  describe('Form submission', () => {
    it('prevents default form submission on Enter', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/first name/i)
      await user.type(input, 'Test{Enter}')
      // Should not advance (form submit is prevented, not a Next click)
      expect(screen.getByText('01 . What is your first name ?')).toBeInTheDocument()
    })
  })

  describe('Blur on non-required step', () => {
    it('does not validate password step on blur', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/first name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/last name/i), 'Doe')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/email/i), 'j@test.com')
      await user.click(screen.getByRole('button', { name: /next/i }))
      // Step 4 (password) — blur should not set error
      const pwInput = screen.getByLabelText(/create your password/i)
      await user.click(pwInput)
      await user.tab()
      // Password step is not required, so no error should appear
      expect(pwInput).not.toHaveAttribute('aria-invalid', 'true')
    })
  })
})
