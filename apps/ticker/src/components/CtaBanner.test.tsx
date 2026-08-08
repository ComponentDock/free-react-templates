import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('shows the headline and a large gradient Start Trading button', () => {
    render(<CtaBanner />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Start Your Trading Journey?' }),
    ).toBeInTheDocument()

    const button = screen.getByRole('link', { name: /Start Trading/ })
    expect(button).toHaveClass('from-primary-500')
    expect(button).toHaveClass('to-primary-600')
    expect(button).toHaveClass('px-10')
  })
})
