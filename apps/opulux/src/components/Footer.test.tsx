import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer with brand and links', () => {
    render(<Footer />)
    expect(screen.getByText('Opulux')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('handles newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Your email')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button'))
    expect(emailInput).toHaveValue('test@example.com')
  })
})
