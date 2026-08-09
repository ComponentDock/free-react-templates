import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the section heading', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Service Expectation' })).toBeInTheDocument()
  })

  it('renders three service cards with Read More links', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Stylish Hair Cut' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Wedding Hair' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Color & Hair Wash' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(3)
  })
})
