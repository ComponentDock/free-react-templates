import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders four client brand names', () => {
    render(<ClientLogos />)
    expect(screen.getByText('Google')).toBeInTheDocument()
    expect(screen.getByText('InVision')).toBeInTheDocument()
    expect(screen.getByText('Nike')).toBeInTheDocument()
    expect(screen.getByText('Microsoft')).toBeInTheDocument()
  })
})
