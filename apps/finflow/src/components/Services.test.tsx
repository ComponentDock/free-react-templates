import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading and all service titles', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Business Consulting' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Credit Card' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Income Monitoring' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Insurance Consulting' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Financial Investment' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Financial Management' })).toBeInTheDocument()
  })
})
