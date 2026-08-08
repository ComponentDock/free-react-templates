import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Specialty/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Automative Manufacturing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Mechanical Engineering/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Oil & Gas Energy/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Industrial Construction/i })).toBeInTheDocument()
  })
})
