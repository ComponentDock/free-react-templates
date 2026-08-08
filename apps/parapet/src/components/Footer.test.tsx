import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, social links, and a copyright line', () => {
    render(<Footer />)

    for (const title of ['Services', 'Company', 'Support']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    for (const label of ['LinkedIn', 'X', 'Facebook']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText(/Premium construction services/)).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Parapet/)).toBeInTheDocument()
  })
})
