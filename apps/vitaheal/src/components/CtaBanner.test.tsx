import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('shows the appointment headline', () => {
    render(<CtaBanner />)
    expect(
      screen.getByText(/Make an appointment with one of our professional Doctors/),
    ).toBeInTheDocument()
  })

  it('renders the Call Now button', () => {
    render(<CtaBanner />)
    const btn = screen.getByRole('link', { name: /call now/i })
    expect(btn).toHaveAttribute('href', '#info')
  })

  it('has a background image', () => {
    render(<CtaBanner />)
    const section = document.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos')
  })
})
