import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, contact details, and social links', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'hello@chroma.studio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 (917) 123 456' })).toBeInTheDocument()

    for (const name of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })
})
