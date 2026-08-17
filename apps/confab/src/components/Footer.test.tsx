import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the blurb, newsletter, contact and Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /Subscribe Newsletter/ }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByText('hello@confab.demo')).toBeInTheDocument()
    expect(screen.getByText(/10 \(85\) 980 3673/)).toBeInTheDocument()

    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
