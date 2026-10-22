import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders a copyright line', () => {
    render(<Footer />)

    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()} Zest`)),
    ).toBeInTheDocument()
  })

  it('credits Component Dock', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
