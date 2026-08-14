import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the centered copyright row with the current year', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(`Copyright ©${new Date().getFullYear()}`)
    expect(footer).toHaveTextContent('All rights reserved')
  })

  it('credits Component Dock with a link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
