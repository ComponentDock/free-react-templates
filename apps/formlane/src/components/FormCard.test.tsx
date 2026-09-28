import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormCard } from './FormCard'

describe('FormCard', () => {
  it('renders the hero image', () => {
    render(<FormCard />)
    expect(screen.getByRole('img', { name: /registration illustration/i })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/formlane-hero/480/600',
    )
  })

  it('renders sign up form by default', () => {
    render(<FormCard />)
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
  })

  it('renders sign in form after tab switch', async () => {
    const user = userEvent.setup()
    render(<FormCard />)

    // Click the Sign In tab (type=button, not the submit button)
    const signInTabs = screen.getAllByRole('button', { name: /sign in/i })
    await user.click(signInTabs[0]!)
    // Sign up form should be gone, sign in form visible
    expect(screen.queryByRole('button', { name: /register/i })).not.toBeInTheDocument()
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
  })

  it('renders the tab bar with both tabs', () => {
    render(<FormCard />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('applies the dark form panel background', () => {
    const { container } = render(<FormCard />)
    const panel = container.querySelector('[style]')
    expect(panel).toBeInTheDocument()
    // Browser converts hex to rgb: #3D5983 = rgb(61, 89, 131)
    expect(panel?.getAttribute('style')).toContain('rgb(61, 89, 131)')
  })

  it('applies card shadow and rounded corners', () => {
    const { container } = render(<FormCard />)
    const card = container.querySelector('.rounded-lg')
    expect(card).toBeInTheDocument()
    expect(card?.className).toContain('shadow-')
  })

  it('renders the card with responsive flex layout', () => {
    const { container } = render(<FormCard />)
    const card = container.querySelector('.flex')
    expect(card?.className).toContain('md:flex-row')
  })
})
