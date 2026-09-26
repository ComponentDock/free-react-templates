import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders client names', () => {
    render(<ClientLogos />)
    expect(screen.getByText('Google')).toBeInTheDocument()
    expect(screen.getByText('Puma')).toBeInTheDocument()
    expect(screen.getByText('PayPal')).toBeInTheDocument()
    expect(screen.getByText('Adobe')).toBeInTheDocument()
  })
})
