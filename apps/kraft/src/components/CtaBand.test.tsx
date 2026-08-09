import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the amber band with heading, paragraph, and Get In Touch button', () => {
    const { container } = render(<CtaBand />)

    expect(container.firstElementChild).toHaveClass('bg-brand')

    expect(
      screen.getByRole('heading', { level: 3, name: "Let's do more together" }),
    ).toBeInTheDocument()

    const button = screen.getByRole('link', { name: 'Get In Touch!' })
    expect(button).toHaveAttribute('href', '#contact')
    expect(button.className).toContain('border-white')
  })
})
