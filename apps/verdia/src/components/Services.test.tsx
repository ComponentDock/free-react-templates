import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Offered Services')
  })

  it('renders service cards', () => {
    render(<Services />)
    expect(screen.getByText('Cardiac Treatment')).toBeInTheDocument()
    expect(screen.getByText('Routine Checkup')).toBeInTheDocument()
  })

  it('renders departments list', () => {
    render(<Services />)
    expect(screen.getByText('Pediatric Diagnosis')).toBeInTheDocument()
    expect(screen.getByText('Cardiac Unit')).toBeInTheDocument()
    expect(screen.getByText('Outpatient Surgery')).toBeInTheDocument()
  })

  it('renders view all departments link', () => {
    render(<Services />)
    expect(screen.getByText('VIEW ALL DEPARTMENTS')).toBeInTheDocument()
  })
})
