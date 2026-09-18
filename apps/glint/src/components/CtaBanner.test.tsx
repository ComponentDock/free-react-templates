import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA text and button', () => {
    render(<CtaBanner />)

    expect(
      screen.getByText('Schedule your appointment for a free consultation'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#contact')
  })
})
