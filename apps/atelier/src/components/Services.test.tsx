import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section header', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What We Provide/i })).toBeInTheDocument()
  })

  it('renders all checklist items', () => {
    render(<Services />)
    expect(screen.getByText(/Professional and creative design/)).toBeInTheDocument()
    expect(screen.getByText(/Responsive development/)).toBeInTheDocument()
    expect(screen.getByText(/Ongoing support/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('renders the service image', () => {
    render(<Services />)
    expect(screen.getByRole('img', { name: /our services in action/i })).toBeInTheDocument()
  })
})
