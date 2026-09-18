import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Web Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Web Development' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Graphic Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Writing' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/203 Fake St. Mountain View/)).toBeInTheDocument()
    expect(screen.getAllByText(/A small river named Duden/).length).toBeGreaterThanOrEqual(1)
  })
})
