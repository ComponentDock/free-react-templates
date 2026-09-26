import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /service offers/i })).toBeInTheDocument()
  })

  it('renders all 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('WP Developing')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('SEO Optimize')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Custom WordPress development/)).toBeInTheDocument()
    expect(screen.getByText(/User-centered design/)).toBeInTheDocument()
    expect(screen.getByText(/Modern, responsive web designs/)).toBeInTheDocument()
    expect(screen.getByText(/Search engine optimization/)).toBeInTheDocument()
  })
})
