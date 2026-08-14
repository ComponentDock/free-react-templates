import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CopyrightBar } from './CopyrightBar'

describe('CopyrightBar', () => {
  it('shows the current year and the all-rights-reserved line', () => {
    render(<CopyrightBar />)

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<CopyrightBar />)

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('includes a decorative heart icon', () => {
    const { container } = render(<CopyrightBar />)
    const heart = container.querySelector('svg')
    expect(heart).toBeInTheDocument()
    expect(heart).toHaveAttribute('aria-hidden', 'true')
  })
})
