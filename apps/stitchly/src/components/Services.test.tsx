import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading and 4 service categories', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Why use our service/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tailor Sewing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Measurements' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Bespoke Suits' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Alterations' })).toBeInTheDocument()
  })
})
