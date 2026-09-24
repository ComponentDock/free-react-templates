import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading and all service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { name: /Health Services We Provided/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('General Surgery')).toBeInTheDocument()
    expect(screen.getByText('Outpatient Services')).toBeInTheDocument()
    expect(screen.getByText('Respiratory Therapy')).toBeInTheDocument()
    expect(screen.getByText('Cardiac Clinic')).toBeInTheDocument()
    expect(screen.getByText('Laryngological Service')).toBeInTheDocument()
  })
})
