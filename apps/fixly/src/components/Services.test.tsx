import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all twelve services', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', {
        name: /This is our some of the many auto repair services we offer/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /General Auto Repair & Maintenance/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Brake Repair and Replacement/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Oil Change/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Computer Diagnostic Testing/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(12)
  })
})
