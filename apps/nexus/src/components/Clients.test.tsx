import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders the section heading', () => {
    render(<Clients />)
    expect(screen.getByRole('heading', { name: 'Our clients' })).toBeInTheDocument()
  })

  it('renders all five client names', () => {
    render(<Clients />)
    expect(screen.getByText('Goldline')).toBeInTheDocument()
    expect(screen.getByText('Foxhub')).toBeInTheDocument()
    expect(screen.getByText('Ideaa')).toBeInTheDocument()
    expect(screen.getByText('Nirastate')).toBeInTheDocument()
    expect(screen.getByText('Treva')).toBeInTheDocument()
  })
})
