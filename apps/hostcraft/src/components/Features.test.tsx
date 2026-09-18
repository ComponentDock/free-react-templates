import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders heading and 6 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByText('Super Fast Server')).toBeInTheDocument()
    expect(screen.getByText('Daily Backups')).toBeInTheDocument()
    expect(screen.getByText('Technical Services')).toBeInTheDocument()
    expect(screen.getByText('Secure and Reliable')).toBeInTheDocument()
    expect(screen.getByText('DNS Control')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })
})
