import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemberCta } from './MemberCta'

describe('MemberCta', () => {
  it('renders the heading, line, and Become a Member button', () => {
    render(<MemberCta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Many more Features are Waiting!' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Join Swole today/i)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Become a Member' })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
