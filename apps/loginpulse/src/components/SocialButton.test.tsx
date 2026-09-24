import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialButton } from './SocialButton'

describe('SocialButton', () => {
  it('renders Facebook variant with correct styles', () => {
    render(<SocialButton label="Facebook" icon={<span>F</span>} variant="facebook" />)
    const link = screen.getByText('Facebook').closest('a')
    expect(link).toHaveClass('bg-[var(--color-facebook-blue)]')
    expect(link).toHaveTextContent('Facebook')
  })

  it('renders Google variant with white background', () => {
    render(<SocialButton label="Google" icon={<span>G</span>} variant="google" />)
    const link = screen.getByText('Google').closest('a')
    expect(link).toHaveClass('bg-white')
  })

  it('renders the icon inside the button', () => {
    render(
      <SocialButton label="Facebook" icon={<span data-testid="icon">F</span>} variant="facebook" />,
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('has the correct link href', () => {
    render(<SocialButton label="Facebook" icon={<span>F</span>} variant="facebook" />)
    const link = screen.getByText('Facebook').closest('a')
    expect(link).toHaveAttribute('href', '#')
  })
})
