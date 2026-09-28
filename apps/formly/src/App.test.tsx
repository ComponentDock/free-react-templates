import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { App } from './App'

describe('Formly — Event Registration Form', () => {
  describe('page layout', () => {
    it('renders a full-page gradient background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper).toHaveClass('bg-gradient-to-br')
      expect(wrapper).toHaveClass('from-[#8B5CF6]')
      expect(wrapper).toHaveClass('to-[#06B6D4]')
    })

    it('renders a centered card on the gradient', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })
  })

  describe('card structure', () => {
    it('has a dark header bar with the title', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        /event registration form/i,
      )
    })
  })

  describe('name field', () => {
    it('renders two-column row for name', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    })

    it('has light gray background on inputs', () => {
      render(<App />)
      const firstName = screen.getByPlaceholderText('First Name')
      expect(firstName).toHaveClass('bg-gray-200')
    })

    it('accepts text input in both name fields', async () => {
      const user = userEvent.setup()
      render(<App />)
      const firstName = screen.getByPlaceholderText('First Name')
      const lastName = screen.getByPlaceholderText('Last Name')
      await user.type(firstName, 'John')
      await user.type(lastName, 'Doe')
      expect(firstName).toHaveValue('John')
      expect(lastName).toHaveValue('Doe')
    })
  })

  describe('company field', () => {
    it('renders a full-width company input', () => {
      render(<App />)
      expect(screen.getByRole('textbox', { name: /company/i })).toBeInTheDocument()
    })

    it('accepts text input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const company = screen.getByRole('textbox', { name: /company/i })
      await user.type(company, 'Acme Corp')
      expect(company).toHaveValue('Acme Corp')
    })
  })

  describe('email field', () => {
    it('renders a full-width email input', () => {
      render(<App />)
      expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    })

    it('accepts email input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const email = screen.getByRole('textbox', { name: /email/i })
      await user.type(email, 'john@example.com')
      expect(email).toHaveValue('john@example.com')
    })
  })

  describe('phone field', () => {
    it('renders two-column row for phone', () => {
      render(<App />)
      expect(screen.getByPlaceholderText('Area Code')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    })

    it('accepts phone input in both fields', async () => {
      const user = userEvent.setup()
      render(<App />)
      const areaCode = screen.getByPlaceholderText('Area Code')
      const phoneNumber = screen.getByPlaceholderText('Phone Number')
      await user.type(areaCode, '555')
      await user.type(phoneNumber, '1234567')
      expect(areaCode).toHaveValue('555')
      expect(phoneNumber).toHaveValue('1234567')
    })
  })

  describe('subject dropdown', () => {
    it('renders a subject dropdown with default option', () => {
      render(<App />)
      const select = screen.getByRole('combobox', { name: /subject/i })
      expect(select).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Choose option' })).toBeInTheDocument()
    })

    it('allows selecting an option', async () => {
      const user = userEvent.setup()
      render(<App />)
      const select = screen.getByRole('combobox', { name: /subject/i })
      await user.selectOptions(select, 'general')
      expect(select).toHaveValue('general')
    })
  })

  describe('customer radio buttons', () => {
    it('renders Yes and No radio buttons', () => {
      render(<App />)
      expect(screen.getByRole('radio', { name: /yes/i })).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: /no/i })).toBeInTheDocument()
    })

    it('has Yes selected by default', () => {
      render(<App />)
      expect(screen.getByRole('radio', { name: /yes/i })).toBeChecked()
      expect(screen.getByRole('radio', { name: /no/i })).not.toBeChecked()
    })

    it('allows toggling between Yes and No', async () => {
      const user = userEvent.setup()
      render(<App />)
      const noRadio = screen.getByRole('radio', { name: /no/i })
      await user.click(noRadio)
      expect(noRadio).toBeChecked()
      expect(screen.getByRole('radio', { name: /yes/i })).not.toBeChecked()
    })

    it('allows toggling back to Yes', async () => {
      const user = userEvent.setup()
      render(<App />)
      const noRadio = screen.getByRole('radio', { name: /no/i })
      const yesRadio = screen.getByRole('radio', { name: /yes/i })
      await user.click(noRadio)
      await user.click(yesRadio)
      expect(yesRadio).toBeChecked()
      expect(noRadio).not.toBeChecked()
    })
  })

  describe('submit button', () => {
    it('renders a REGISTER button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
    })

    it('has coral/red background', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /register/i })).toHaveClass('bg-red-500')
    })

    it('has uppercase text', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /register/i })).toHaveClass('uppercase')
    })

    it('submits the form when clicked', async () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /register/i }))
      expect(consoleSpy).toHaveBeenCalled()
      consoleSpy.mockRestore()
    })
  })

  describe('form input styling', () => {
    it('all text inputs have consistent styling', () => {
      render(<App />)
      const inputs = screen.getAllByRole('textbox')
      inputs.forEach((input) => {
        expect(input).toHaveClass('bg-gray-200')
        expect(input).toHaveClass('rounded-md')
        expect(input).toHaveClass('border-0')
      })
    })

    it('labels have correct styling', () => {
      render(<App />)
      const labels = screen.getAllByText(/name|company|email|phone|subject/i)
      labels.forEach((label) => {
        expect(label).toHaveClass('text-gray-800')
        expect(label).toHaveClass('text-sm')
        expect(label).toHaveClass('font-semibold')
      })
    })
  })

  describe('responsive behavior', () => {
    it('columns stack on mobile', () => {
      render(<App />)
      const firstNameInput = screen.getByPlaceholderText('First Name')
      const nameGroup = firstNameInput.closest('div')
      expect(nameGroup).toHaveClass('grid')
      expect(nameGroup).toHaveClass('grid-cols-1')
      expect(nameGroup).toHaveClass('sm:grid-cols-2')
    })
  })

  describe('footer', () => {
    it('links to componentdock.com', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })
  })
})
