import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, social links, and a copyright line', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Soar' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    const year = new Date().getFullYear()
    expect(screen.getByText(`© ${year} Soar. All rights reserved.`)).toBeInTheDocument()
  })
})
