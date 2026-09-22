import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicingHours } from './ServicingHours'

describe('ServicingHours', () => {
  beforeEach(() => {
    render(<ServicingHours />)
  })

  it('renders the heading', () => {
    expect(screen.getByRole('heading', { level: 2, name: /servicing hours/i })).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    expect(screen.getByText(/our dedicated medical team/i)).toBeInTheDocument()
  })

  it('renders Monday - Friday schedule', () => {
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument()
    expect(screen.getByText('08:00 am - 10:00 pm')).toBeInTheDocument()
  })

  it('renders Saturday schedule', () => {
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('08:00 am - 06:00 pm')).toBeInTheDocument()
  })

  it('renders Sunday as Closed', () => {
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })
})
