import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AreasOfExpertise } from './AreasOfExpertise'

describe('AreasOfExpertise', () => {
  it('renders the section heading', () => {
    render(<AreasOfExpertise />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Areas of Expertise')
  })

  it('renders all six expertise items', () => {
    render(<AreasOfExpertise />)
    expect(screen.getByText('Insurance Matters')).toBeDefined()
    expect(screen.getByText('Legal Advisory')).toBeDefined()
    expect(screen.getByText('Litigation Support')).toBeDefined()
    expect(screen.getByText('Corporate Law')).toBeDefined()
    expect(screen.getByText('Family Law')).toBeDefined()
    expect(screen.getByText('Real Estate Law')).toBeDefined()
  })
})
