import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopCompanies } from './TopCompanies'

describe('TopCompanies', () => {
  it('renders the heading, browse button, and 8 company cards', () => {
    render(<TopCompanies />)

    expect(screen.getByRole('heading', { level: 2, name: 'Top Companies' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Browse More Job' })).toBeInTheDocument()

    const companyNames = [
      'Google',
      'Apple',
      'Meta',
      'Amazon',
      'Microsoft',
      'Netflix',
      'Spotify',
      'Adobe',
    ]

    for (const name of companyNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }

    expect(screen.getAllByText(/Open Positions/)).toHaveLength(8)
  })
})
