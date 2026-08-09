import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Repair' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Car Accessories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Own a Car' })).toBeInTheDocument()
  })
})
