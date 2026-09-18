import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+10 367 267 2678')).toBeInTheDocument()
    expect(screen.getByText('info@techwise.com')).toBeInTheDocument()
  })

  it('renders all four social links', () => {
    render(<TopBar />)
    for (const social of ['Facebook', 'Twitter', 'Instagram', 'Dribbble']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('links the phone number to tel: and email to mailto:', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /info@techwise/ })).toHaveAttribute(
      'href',
      'mailto:info@techwise.com',
    )
    expect(screen.getByRole('link', { name: /\+10 367/ })).toHaveAttribute(
      'href',
      'tel:+103672672678',
    )
  })
})
