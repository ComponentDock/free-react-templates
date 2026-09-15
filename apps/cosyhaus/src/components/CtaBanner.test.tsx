import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('displays the CTA heading and contact button', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Are you Searching For a/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
