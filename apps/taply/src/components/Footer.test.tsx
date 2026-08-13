import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the copyright line with a Component Dock link', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year} Taply`))).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the PRESS, TERMS and PRIVACY links', () => {
    render(<Footer />)

    for (const label of ['PRESS', 'TERMS', 'PRIVACY']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
