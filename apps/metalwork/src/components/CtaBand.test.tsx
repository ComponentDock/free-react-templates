import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the heading and the outline-white download button', () => {
    render(<CtaBand />)

    expect(
      screen.getByRole('heading', { name: 'Get Started With Metalwork Free Template' }),
    ).toBeInTheDocument()

    const button = screen.getByRole('link', { name: 'Download This Template' })
    expect(button).toHaveAttribute('href', '#contact')
    expect(button.className).toContain('border-white')
  })
})
