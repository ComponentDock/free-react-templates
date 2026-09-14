import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('displays the heading and schedule button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /Book Your Appointment/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Schedule Now/i })).toHaveAttribute('href', '#contact')
  })
})
