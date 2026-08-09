import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the headline and the call-to-action button', () => {
    render(<CtaBand />)
    expect(
      screen.getByRole('heading', { name: /make gilded your number one choice/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /book now/i })).toHaveAttribute('href', '#contact')
  })
})
