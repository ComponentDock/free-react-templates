import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders 3 service cards with correct titles', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Unlimited Components' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Awesome Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Responsive Design' })).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Spruce helps you to showcase/,
    )
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    // Use getAllByText since "Combine sections..." appears in section description too
    expect(
      screen.getAllByText(/Combine sections from our vast component library/).length,
    ).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/dedicated support team is available 24\/7/)).toBeInTheDocument()
    expect(screen.getByText(/fully responsive and looks great on all devices/)).toBeInTheDocument()
  })
})
