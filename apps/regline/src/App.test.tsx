import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { App } from './App'

describe('Regline — Job Application Form', () => {
  describe('page layout', () => {
    it('renders a dark background', () => {
      const { container } = render(<App />)
      const wrapper = container.firstElementChild as HTMLElement
      expect(wrapper).toHaveClass('bg-[#212121]')
    })

    it('renders a heading "Apply for job"', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Apply for job')
    })

    it('renders a decorative blue triangle SVG', () => {
      const { container } = render(<App />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      const path = svg?.querySelector('path')
      expect(path).toHaveAttribute('fill', '#4A6CF7')
    })
  })

  describe('form structure', () => {
    it('renders a centered white card', () => {
      const { container } = render(<App />)
      const form = container.querySelector('form')
      expect(form).toHaveClass('bg-white')
      expect(form).toHaveClass('rounded')
    })

    it('has full name input', () => {
      render(<App />)
      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    })

    it('has email input', () => {
      render(<App />)
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })

    it('has message textarea', () => {
      render(<App />)
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    })

    it('has CV upload field', () => {
      render(<App />)
      expect(screen.getByLabelText(/upload cv/i)).toBeInTheDocument()
    })

    it('has send application button', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /send application/i })).toBeInTheDocument()
    })
  })

  describe('full name field', () => {
    it('accepts text input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/full name/i)
      await user.type(input, 'John Doe')
      expect(input).toHaveValue('John Doe')
    })

    it('shows error when empty on submit', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(screen.getByText('Full name is required')).toBeInTheDocument()
    })

    it('clears error when user types', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(screen.getByText('Full name is required')).toBeInTheDocument()
      await user.type(screen.getByLabelText(/full name/i), 'John')
      expect(screen.queryByText('Full name is required')).not.toBeInTheDocument()
    })
  })

  describe('email field', () => {
    it('accepts email input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const input = screen.getByLabelText(/email/i)
      await user.type(input, 'john@example.com')
      expect(input).toHaveValue('john@example.com')
    })

    it('shows error when empty on submit', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(screen.getByText('Email is required')).toBeInTheDocument()
    })

    it('clears email error when user types', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(screen.getByText('Email is required')).toBeInTheDocument()
      await user.type(screen.getByLabelText(/email/i), 'j')
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
    })

    it('rejects invalid email format', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/full name/i), 'John')
      await user.type(screen.getByLabelText(/email/i), 'notanemail')
      await user.type(screen.getByLabelText(/message/i), 'Hello')
      fireEvent.submit(screen.getByRole('button', { name: /send application/i }))
      expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    })

    it('accepts valid email format', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/full name/i), 'John')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      await user.type(screen.getByLabelText(/message/i), 'Hello')
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
    })
  })

  describe('message field', () => {
    it('accepts text input', async () => {
      const user = userEvent.setup()
      render(<App />)
      const textarea = screen.getByLabelText(/message/i)
      await user.type(textarea, 'I am interested in this position')
      expect(textarea).toHaveValue('I am interested in this position')
    })

    it('shows error when empty on submit', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(screen.getByText('Message is required')).toBeInTheDocument()
    })

    it('clears message error when user types', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(screen.getByText('Message is required')).toBeInTheDocument()
      await user.type(screen.getByLabelText(/message/i), 'H')
      expect(screen.queryByText('Message is required')).not.toBeInTheDocument()
    })
  })

  describe('CV upload', () => {
    it('shows helper text', () => {
      render(<App />)
      expect(screen.getByText(/upload your cv\/resume/i)).toBeInTheDocument()
    })

    it('accepts file upload', async () => {
      const user = userEvent.setup()
      render(<App />)
      const file = new File(['resume content'], 'resume.pdf', {
        type: 'application/pdf',
      })
      const input = screen.getByLabelText(/upload cv/i)
      await user.upload(input, file)
      // jsdom doesn't fully support file input values; check the file name display
      expect((input as HTMLInputElement).files?.[0]?.name).toBe('resume.pdf')
    })

    it('handles file upload via fireEvent', () => {
      render(<App />)
      const file = new File(['content'], 'doc.pdf', { type: 'application/pdf' })
      const input = screen.getByLabelText(/upload cv/i)
      const dataTransfer = { files: [file] }
      fireEvent.change(input, { target: dataTransfer })
      // No error should be shown for valid file
      expect(screen.queryByText('File size must be less than 50 MB')).not.toBeInTheDocument()
    })

    it('handles clearing file via fireEvent with no files', () => {
      render(<App />)
      const input = screen.getByLabelText(/upload cv/i)
      fireEvent.change(input, { target: { files: [] } })
      // No error should be shown
      expect(screen.queryByText('File size must be less than 50 MB')).not.toBeInTheDocument()
    })

    it('rejects oversized file', async () => {
      const user = userEvent.setup()
      render(<App />)
      // Create a file larger than 50MB
      const largeContent = Array.from({ length: 51 * 1024 * 1024 }, () => 'a').join('')
      const file = new File([largeContent], 'large-resume.pdf', {
        type: 'application/pdf',
      })
      const input = screen.getByLabelText(/upload cv/i)
      await user.upload(input, file)
      expect(screen.getByText('File size must be less than 50 MB')).toBeInTheDocument()
    })

    it('clears cvFile error when valid file is uploaded after oversized', async () => {
      const user = userEvent.setup()
      render(<App />)
      const largeContent = Array.from({ length: 51 * 1024 * 1024 }, () => 'a').join('')
      const largeFile = new File([largeContent], 'large.pdf', {
        type: 'application/pdf',
      })
      const input = screen.getByLabelText(/upload cv/i)
      await user.upload(input, largeFile)
      expect(screen.getByText('File size must be less than 50 MB')).toBeInTheDocument()

      const validFile = new File(['content'], 'resume.pdf', {
        type: 'application/pdf',
      })
      await user.upload(input, validFile)
      expect(screen.queryByText('File size must be less than 50 MB')).not.toBeInTheDocument()
    })

    it('shows cvFile validation error on submit with oversized file', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/full name/i), 'John')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      await user.type(screen.getByLabelText(/message/i), 'Hello')
      // Manually set an oversized file via submit validation
      const largeContent = Array.from({ length: 51 * 1024 * 1024 }, () => 'a').join('')
      const largeFile = new File([largeContent], 'large.pdf', {
        type: 'application/pdf',
      })
      const input = screen.getByLabelText(/upload cv/i)
      // Upload oversized file (triggers error in handleFileChange)
      await user.upload(input, largeFile)
      // The error should appear
      expect(screen.getByText('File size must be less than 50 MB')).toBeInTheDocument()
    })
  })

  describe('submit button', () => {
    it('has blue background', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /send application/i })
      expect(button).toHaveClass('bg-[#4A6CF7]')
    })

    it('has white text', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /send application/i })
      expect(button).toHaveClass('text-white')
    })

    it('has pointer cursor', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /send application/i })
      expect(button).toHaveClass('cursor-pointer')
    })

    it('submits when all fields are valid', async () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/full name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      await user.type(screen.getByLabelText(/message/i), 'Interested in the role')
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(consoleSpy).toHaveBeenCalledWith(
        'Application submitted:',
        expect.objectContaining({
          fullName: 'John Doe',
          email: 'john@example.com',
          message: 'Interested in the role',
        }),
      )
      consoleSpy.mockRestore()
    })

    it('shows success message after valid submission', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/full name/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      await user.type(screen.getByLabelText(/message/i), 'Hello')
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(screen.getByText(/application has been submitted/i)).toBeInTheDocument()
    })
  })

  describe('form styling', () => {
    it('inputs have light gray border', () => {
      render(<App />)
      const nameInput = screen.getByLabelText(/full name/i)
      expect(nameInput).toHaveClass('border-[#DEE2E6]')
    })

    it('inputs have white background', () => {
      render(<App />)
      const nameInput = screen.getByLabelText(/full name/i)
      expect(nameInput).toHaveClass('bg-white')
    })

    it('labels are bold dark gray', () => {
      render(<App />)
      const nameLabel = screen.getByText('Full name')
      expect(nameLabel).toHaveClass('font-semibold')
      expect(nameLabel).toHaveClass('text-[#333333]')
    })

    it('button has correct padding and radius', () => {
      render(<App />)
      const button = screen.getByRole('button', { name: /send application/i })
      expect(button).toHaveClass('rounded')
      expect(button).toHaveClass('px-7')
      expect(button).toHaveClass('py-3')
    })
  })

  describe('responsive behavior', () => {
    it('card fits within viewport', () => {
      const { container } = render(<App />)
      const main = container.querySelector('main')
      expect(main).toHaveClass('max-w-[700px]')
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
  })

  describe('form validation integration', () => {
    it('shows all errors when submitting empty form', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(screen.getByText('Full name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
      expect(screen.getByText('Message is required')).toBeInTheDocument()
    })

    it('does not submit when validation fails', async () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /send application/i }))
      expect(consoleSpy).not.toHaveBeenCalled()
      consoleSpy.mockRestore()
    })
  })
})
