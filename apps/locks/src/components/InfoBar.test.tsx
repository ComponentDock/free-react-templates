import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoBar } from './InfoBar'

describe('InfoBar', () => {
  it('renders the phone, address and opening hours', () => {
    render(<InfoBar />)
    expect(screen.getByText(/000 \(123\) 456 7890/i)).toBeInTheDocument()
    expect(screen.getByText(/198 West 21th Street/i)).toBeInTheDocument()
    expect(screen.getByText(/Open Monday-Friday/i)).toBeInTheDocument()
  })

  it('renders social links for X, Facebook and Instagram', () => {
    render(<InfoBar />)
    expect(screen.getByRole('link', { name: /x/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })
})
