import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders the client logos section', () => {
    render(<ClientLogos />)
    expect(screen.getByRole('region', { name: /client logos/i })).toBeInTheDocument()
  })

  it('renders six logo images', () => {
    render(<ClientLogos />)
    const logos = screen.getAllByRole('img')
    expect(logos.length).toBe(6)
  })
})
