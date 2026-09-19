import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClientsLogo } from './ClientsLogo'

describe('ClientsLogo', () => {
  it('renders 5 client logo images', () => {
    render(<ClientsLogo />)
    const logos = screen.getAllByRole('img')
    expect(logos).toHaveLength(5)
  })

  it('renders each logo with the correct alt text', () => {
    render(<ClientsLogo />)
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByAltText(`Client ${i}`)).toBeInTheDocument()
    }
  })
})
