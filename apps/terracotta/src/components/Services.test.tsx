import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /our service/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Home Decor/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Landscape Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interior Styling/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Furniture Layout/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Lighting Setup/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Space Remodel/i })).toBeInTheDocument()
  })
})
