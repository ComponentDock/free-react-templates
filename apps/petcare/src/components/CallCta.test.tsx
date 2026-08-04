import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallCta } from './CallCta'

describe('CallCta', () => {
  it('shows the call-to-action heading, phone number, and Contact Us button', () => {
    render(<CallCta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Any time you can call us!' }),
    ).toBeInTheDocument()
    expect(screen.getByText('+880 4664 216')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute(
      'href',
      'tel:+8804664216',
    )
  })
})
