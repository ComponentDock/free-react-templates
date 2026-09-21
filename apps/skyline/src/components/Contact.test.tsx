import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'
import { describe, it, expect } from 'vitest'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Skyline')
  })

  it('renders the address', () => {
    render(<Contact />)
    expect(screen.getByText('432 Wyandotte Ave, Lakewood, OH 44107')).toBeInTheDocument()
  })

  it('renders phone numbers', () => {
    render(<Contact />)
    expect(screen.getByText('(216) 785-9346')).toBeInTheDocument()
    expect(screen.getByText('(216) 785-9347')).toBeInTheDocument()
  })

  it('renders email addresses', () => {
    render(<Contact />)
    expect(screen.getByText('info@skylinerestaurant.com')).toBeInTheDocument()
    expect(screen.getByText('reservations@skylinerestaurant.com')).toBeInTheDocument()
  })
})
