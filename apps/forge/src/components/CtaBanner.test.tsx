import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the teal band with a heading, text, and Get In Touch button', () => {
    render(<CtaBanner />)

    const band = screen.getByRole('region', { name: /project in mind/i })
    expect(band.className).toMatch(/bg-brand/)

    expect(
      screen.getByRole('heading', { level: 3, name: /Do You Have An Awesome Project In Mind/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument()

    const button = screen.getByRole('link', { name: 'Get In Touch!' })
    expect(button).toHaveAttribute('href', '#contact')
    expect(button.className).toMatch(/border-white/)
  })
})
