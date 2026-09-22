import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA heading and button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Book an appointment')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Get into shape now/i)
    expect(screen.getByRole('link', { name: /Book Now/i })).toHaveAttribute('href', '#contact')
  })
})
