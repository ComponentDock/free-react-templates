import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders all partner brand names', () => {
    render(<Brands />)
    expect(screen.getByText('Partner Alpha')).toBeInTheDocument()
    expect(screen.getByText('Global Freight Co')).toBeInTheDocument()
    expect(screen.getByText('Swift Logistics')).toBeInTheDocument()
    expect(screen.getByText('CargoPrime')).toBeInTheDocument()
  })
})
