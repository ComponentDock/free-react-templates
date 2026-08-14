import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the accent heading and the call-to-action button', () => {
    render(<CtaBand />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Dont worry for contact i`m available' }),
    ).toBeInTheDocument()
    const button = screen.getByRole('link', { name: 'Contact Me Now' })
    expect(button).toHaveAttribute('href', '#contact')
  })
})
