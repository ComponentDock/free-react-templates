import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Topbar } from './Topbar'

describe('Topbar', () => {
  it('renders the phone number and London address', () => {
    render(<Topbar />)
    expect(screen.getByRole('link', { name: /\+44 20 7930 8205/ })).toHaveAttribute(
      'href',
      'tel:+442079308205',
    )
    expect(screen.getByText('450 Strand, Charing Cross, London')).toBeInTheDocument()
  })

  it('renders the Register or Sign In link', () => {
    render(<Topbar />)
    expect(screen.getByRole('link', { name: 'Register or Sign In' })).toBeInTheDocument()
  })

  it('renders four social icon links with accessible labels', () => {
    render(<Topbar />)
    for (const label of ['Facebook', 'Twitter', 'LinkedIn', 'Pinterest']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
