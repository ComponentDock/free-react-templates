import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading and both service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What We Offer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Wedding Photography' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nature Photography' })).toBeInTheDocument()
  })

  it('renders read more links for each service', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: /Read More/i })
    expect(links).toHaveLength(2)
  })
})
