import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Commitment } from './Commitment'

describe('Commitment', () => {
  it('renders the illustration beside the security caption', () => {
    render(<Commitment />)
    expect(screen.getByRole('region', { name: 'Commitment to security' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Commitment to security' })).toBeVisible()
    const illustration = screen.getByRole('img')
    expect(illustration).toHaveAttribute('alt', expect.stringContaining('server room'))
    expect(illustration).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/presto-security/960/640',
    )
    expect(screen.getByText(/Access is gated by two-factor sign-in/)).toHaveClass('mb-10')
  })

  it('offers a coral outline Learn More pill that fills on hover', () => {
    render(<Commitment />)
    const cta = screen.getByRole('link', { name: 'Learn More' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta).toHaveClass('rounded-full', 'border-coral', 'text-coral', 'hover:bg-coral')
  })
})
