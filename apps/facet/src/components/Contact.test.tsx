import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading and contact details', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
    for (const label of ['Address', 'Contact Number', 'Email Address']) {
      expect(screen.getByRole('heading', { level: 3, name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+ 1235 2355 98' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@yoursite.com' })).toBeInTheDocument()
  })
})
