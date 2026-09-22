import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA title and description', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Make your appointment today!')).toBeInTheDocument()
    expect(screen.getByText(/friendly team is ready/)).toBeInTheDocument()
  })

  it('displays the phone number as a link', () => {
    render(<CtaBanner />)
    const phoneLink = screen.getByRole('link', { name: /\+34 586 778 8892/ })
    expect(phoneLink).toHaveAttribute('href', 'tel:+345867788892')
  })
})
