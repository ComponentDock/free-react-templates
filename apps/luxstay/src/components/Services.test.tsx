import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('24/7 Front Desk')).toBeInTheDocument()
    expect(screen.getByText('Spa Suites')).toBeInTheDocument()
    expect(screen.getByText('Transfer Services')).toBeInTheDocument()
    expect(screen.getByText('Restaurant & Bar')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Services />)
    // 5 stars in the heading
    const stars = document.querySelectorAll('svg')
    expect(stars.length).toBeGreaterThanOrEqual(5)
  })
})
