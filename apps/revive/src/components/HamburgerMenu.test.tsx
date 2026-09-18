import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { HamburgerMenu } from './HamburgerMenu'

describe('HamburgerMenu', () => {
  const defaultProps = {
    isOpen: false,
    onClose: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders nothing when closed', () => {
    render(<HamburgerMenu {...defaultProps} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders menu when open', () => {
    render(<HamburgerMenu {...defaultProps} isOpen={true} />)
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<HamburgerMenu {...defaultProps} isOpen={true} />)
    await user.click(screen.getByLabelText('Close menu'))
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
  })

  it('has search input', () => {
    render(<HamburgerMenu {...defaultProps} isOpen={true} />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('allows typing in search', async () => {
    const user = userEvent.setup()
    render(<HamburgerMenu {...defaultProps} isOpen={true} />)
    const input = screen.getByLabelText('Search')
    await user.type(input, 'test query')
    expect(input).toHaveValue('test query')
  })

  it('renders social icons', () => {
    render(<HamburgerMenu {...defaultProps} isOpen={true} />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('RSS')).toBeInTheDocument()
  })
})
