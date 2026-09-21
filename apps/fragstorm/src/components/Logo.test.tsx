import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'

describe('Logo', () => {
  it('renders the brand name', () => {
    render(<Logo />)
    expect(screen.getByText('Fragstorm')).toBeInTheDocument()
  })

  it('links to home', () => {
    render(<Logo />)
    const link = screen.getByLabelText('Fragstorm home')
    expect(link).toHaveAttribute('href', '#home')
  })
})
