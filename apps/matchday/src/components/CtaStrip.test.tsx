import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaStrip } from './CtaStrip'

describe('CtaStrip', () => {
  it('renders the join-club call to action with a navy span', () => {
    render(<CtaStrip />)
    expect(screen.getByText(/would you like to join our/i)).toBeInTheDocument()
    expect(screen.getByText('football club?')).toHaveClass('text-navy')
  })

  it('shows the navy See More Info button linking to contact', () => {
    render(<CtaStrip />)
    const link = screen.getByRole('link', { name: 'See More Info' })
    expect(link).toHaveAttribute('href', '#contact')
    expect(link).toHaveClass('bg-navy')
  })
})
