import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Service Offerings/i })).toBeInTheDocument()
    for (const title of ['Total Architecture', 'Interior Solution', 'Construction Guideline']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders a view-all-services button', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: /view all services/i })).toBeInTheDocument()
  })
})
