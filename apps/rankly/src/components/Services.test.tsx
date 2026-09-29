import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Device Related Services/i })).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Site Audit' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Keyword Research' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Content Optimization' })).toBeInTheDocument()
  })
})
