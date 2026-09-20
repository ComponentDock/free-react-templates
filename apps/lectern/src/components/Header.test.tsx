import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders working time and address', () => {
    render(<Header />)
    expect(screen.getByText(/working time/i)).toBeInTheDocument()
    expect(screen.getByText(/monday - friday/i)).toBeInTheDocument()
    expect(screen.getByText(/find us/i)).toBeInTheDocument()
    expect(screen.getByText(/new york/i)).toBeInTheDocument()
  })
})
