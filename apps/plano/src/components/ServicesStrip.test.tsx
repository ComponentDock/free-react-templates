import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesStrip } from './ServicesStrip'

describe('ServicesStrip', () => {
  it('renders three service columns', () => {
    render(<ServicesStrip />)
    expect(screen.getByText('Planing')).toBeInTheDocument()
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('3D Design')).toBeInTheDocument()
  })

  it('displays large decorative numbers', () => {
    render(<ServicesStrip />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<ServicesStrip />)
    expect(screen.getByText(/Crafting thoughtful/)).toBeInTheDocument()
    expect(screen.getByText(/Blending form/)).toBeInTheDocument()
    expect(screen.getByText(/Bringing your project/)).toBeInTheDocument()
  })
})
