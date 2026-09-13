import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FooterBottom } from './FooterBottom'

describe('FooterBottom', () => {
  it('renders the copyright text with Component Dock link', () => {
    render(<FooterBottom />)
    expect(screen.getByText(/Techwise/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('displays the current year', () => {
    render(<FooterBottom />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
