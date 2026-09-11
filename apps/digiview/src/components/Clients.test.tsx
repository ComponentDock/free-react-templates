import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders trust text', () => {
    render(<Clients />)
    expect(screen.getByText(/Trusted by leading companies/i)).toBeInTheDocument()
  })

  it('renders all client logos', () => {
    render(<Clients />)
    expect(screen.getByText('ClientCo')).toBeInTheDocument()
    expect(screen.getByText('TechHub')).toBeInTheDocument()
    expect(screen.getByText('InnoLab')).toBeInTheDocument()
    expect(screen.getByText('GrowthX')).toBeInTheDocument()
    expect(screen.getByText('DataPrime')).toBeInTheDocument()
    expect(screen.getByText('CloudBase')).toBeInTheDocument()
  })
})
