import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('credits the current year and links Component Dock', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toHaveClass('bg-band')
    expect(footer.textContent).toContain(`Copyright © ${new Date().getFullYear()}`)
    expect(footer.textContent).toContain('All rights reserved')
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
