import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { name: /What we Offer to our Supporters/i }),
    ).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Conduct Campaign')).toBeInTheDocument()
    expect(screen.getByText('Generate Member')).toBeInTheDocument()
    expect(screen.getByText('Energy Saving Policy')).toBeInTheDocument()
  })

  it('renders service images', () => {
    render(<Services />)
    expect(screen.getByAltText('Conduct Campaign')).toBeInTheDocument()
    expect(screen.getByAltText('Generate Member')).toBeInTheDocument()
    expect(screen.getByAltText('Energy Saving Policy')).toBeInTheDocument()
  })
})
