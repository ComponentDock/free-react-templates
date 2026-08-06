import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows link columns, social links, and the copyright line', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
