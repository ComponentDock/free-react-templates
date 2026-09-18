import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders section heading', () => {
    render(<Features />)
    expect(screen.getByText(/the world/)).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Fast & Easy')).toBeInTheDocument()
    expect(screen.getByText('No Strings Attached')).toBeInTheDocument()
    expect(screen.getByText('Small Commissions')).toBeInTheDocument()
    expect(screen.getByText('100% Secure')).toBeInTheDocument()
  })

  it('renders Read More buttons for each feature', () => {
    render(<Features />)
    const readMoreLinks = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMoreLinks).toHaveLength(4)
  })
})
