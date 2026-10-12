import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the centered section title', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Most amazing features')
  })

  it('renders the six feature cards with captions and blurbs', () => {
    render(<Features />)
    expect(screen.getAllByRole('heading', { level: 5 })).toHaveLength(6)
    for (const caption of [
      'Employee Owned',
      'Commitment to Security',
      'Passion for Privacy',
      'Free SSL Certificates',
      '24/7 Support',
      '100% Uptime Guaranteed',
    ]) {
      expect(screen.getByRole('heading', { level: 5, name: caption })).toBeInTheDocument()
    }
    expect(screen.getByText(/Our team owns the company/)).toBeInTheDocument()
    expect(screen.getByText(/keep you online — backed in writing/)).toBeInTheDocument()
  })
})
