import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns, social links, and the copyright line', () => {
    render(<Footer />)

    for (const title of ['Product', 'Company', 'Support']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    for (const link of ['Features', 'About Us', 'Help Center']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    for (const name of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }

    expect(screen.getByText(/© \d{4} Violet\. All rights reserved\./)).toBeInTheDocument()
  })
})
