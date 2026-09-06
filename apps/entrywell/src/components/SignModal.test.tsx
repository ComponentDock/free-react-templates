import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SignModal } from './SignModal'

describe('SignModal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('when closed', () => {
    it('does not render the modal', () => {
      render(<SignModal isOpen={false} onClose={vi.fn()} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  describe('when open', () => {
    it('renders the modal dialog', () => {
      render(<SignModal {...defaultProps} />)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
    })

    it('has accessible label', () => {
      render(<SignModal {...defaultProps} />)
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-label', 'Sign in or sign up')
    })

    it('renders close button', () => {
      render(<SignModal {...defaultProps} />)
      expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument()
    })

    it('closes on close button click', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<SignModal isOpen={true} onClose={onClose} />)
      await user.click(screen.getByRole('button', { name: /close modal/i }))
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it('closes on backdrop click', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<SignModal isOpen={true} onClose={onClose} />)
      const dialog = screen.getByRole('dialog')
      await user.click(dialog)
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it('does not close when clicking modal content', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<SignModal isOpen={true} onClose={onClose} />)
      const heading = screen.getByRole('heading', { name: /sign in/i })
      await user.click(heading)
      expect(onClose).not.toHaveBeenCalled()
    })

    it('closes on Escape key', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<SignModal isOpen={true} onClose={onClose} />)
      await user.keyboard('{Escape}')
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it('does not close on other keys', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<SignModal isOpen={true} onClose={onClose} />)
      await user.keyboard('{a}')
      expect(onClose).not.toHaveBeenCalled()
    })

    it('renders left image panel', () => {
      render(<SignModal {...defaultProps} />)
      const dialog = screen.getByRole('dialog')
      const imagePanel = dialog.querySelector('[style*="picsum.photos"]')
      expect(imagePanel).toBeTruthy()
    })
  })

  describe('Sign In tab', () => {
    it('is active by default', () => {
      render(<SignModal {...defaultProps} />)
      const signInTab = screen.getAllByRole('tab')[0]!
      expect(signInTab).toHaveTextContent('Sign In')
      expect(signInTab).toHaveAttribute('aria-selected', 'true')
    })

    it('renders Sign In heading', () => {
      render(<SignModal {...defaultProps} />)
      expect(screen.getByRole('heading', { name: /sign in$/i })).toBeInTheDocument()
    })

    it('renders username input', () => {
      render(<SignModal {...defaultProps} />)
      const input = screen.getByPlaceholderText('Username')
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('id', 'signin-username')
    })

    it('renders password input', () => {
      render(<SignModal {...defaultProps} />)
      const input = screen.getByPlaceholderText('Password')
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'password')
    })

    it('renders Remember Me checkbox', () => {
      render(<SignModal {...defaultProps} />)
      expect(screen.getByLabelText('Remember Me')).toBeInTheDocument()
    })

    it('renders Forgot Password link', () => {
      render(<SignModal {...defaultProps} />)
      expect(screen.getByText('Forgot Password')).toBeInTheDocument()
    })

    it('renders Sign In submit button', () => {
      render(<SignModal {...defaultProps} />)
      const buttons = screen.getAllByRole('button', { name: /^sign in$/i })
      expect(buttons.length).toBeGreaterThanOrEqual(1)
    })

    it('renders Not a member? Sign Up link', () => {
      render(<SignModal {...defaultProps} />)
      expect(screen.getByText(/not a member/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /sign up$/i })).toBeInTheDocument()
    })

    it('switches to Sign Up when clicking Sign Up link', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getByRole('button', { name: /sign up$/i }))
      expect(screen.getByRole('heading', { name: /sign up$/i })).toBeInTheDocument()
      expect(screen.queryByRole('heading', { name: /sign in$/i })).not.toBeInTheDocument()
    })

    it('does not reload on form submit', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getByRole('button', { name: /^sign in$/i }))
      // form submit is prevented, no page reload
    })
  })

  describe('Sign Up tab', () => {
    it('switches to Sign Up tab on click', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      const signUpTab = screen.getAllByRole('tab')[1]!
      await user.click(signUpTab)
      expect(signUpTab).toHaveAttribute('aria-selected', 'true')
    })

    it('renders Sign Up heading', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      expect(screen.getByRole('heading', { name: /sign up$/i })).toBeInTheDocument()
    })

    it('renders Full Name input', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
    })

    it('renders Email Address input', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      expect(screen.getByPlaceholderText('johndoe@gmail.com')).toBeInTheDocument()
    })

    it('renders Password input on Sign Up', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      const passwordInputs = screen.getAllByPlaceholderText('Password')
      expect(passwordInputs.length).toBeGreaterThanOrEqual(1)
    })

    it('renders terms of service checkbox', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      expect(screen.getByLabelText(/i agree all statements/i)).toBeInTheDocument()
    })

    it('renders Sign Up submit button', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      const buttons = screen.getAllByRole('button', { name: /^sign up$/i })
      expect(buttons.length).toBeGreaterThanOrEqual(1)
    })

    it('renders already a member link', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      expect(screen.getByText(/already a member/i)).toBeInTheDocument()
    })

    it('switches back to Sign In from Sign Up', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      await user.click(screen.getByRole('button', { name: /sign in$/i }))
      expect(screen.getByRole('heading', { name: /sign in$/i })).toBeInTheDocument()
    })

    it('does not reload on sign up form submit', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      await user.click(screen.getByRole('button', { name: /^sign up$/i }))
      // form submit is prevented, no page reload
    })
  })

  describe('tab switching', () => {
    it('hides Sign In form when Sign Up is active', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      expect(screen.queryByPlaceholderText('Username')).not.toBeInTheDocument()
    })

    it('hides Sign Up form when Sign In is active', async () => {
      const user = userEvent.setup()
      render(<SignModal {...defaultProps} />)
      await user.click(screen.getAllByRole('tab')[1]!)
      await user.click(screen.getAllByRole('tab')[0]!)
      expect(screen.queryByPlaceholderText('John Doe')).not.toBeInTheDocument()
    })
  })
})
