import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SupportBand } from './SupportBand'
import { supportSection } from '../data'

describe('SupportBand', () => {
  it('shows the 24/7 support message with the phone number and a Live Chat button', () => {
    const { container } = render(<SupportBand />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-primary')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Need help/)
    expect(screen.getByText(supportSection.phone)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: supportSection.chat })).toBeInTheDocument()
  })
})
