import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders 5 partner images', () => {
    render(<Partners />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('renders each partner by name', () => {
    render(<Partners />)
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByAltText(`Partner ${i}`)).toBeInTheDocument()
    }
  })

  it('has the sr-only heading', () => {
    render(<Partners />)
    expect(screen.getByText('Trusted Partners')).toBeInTheDocument()
  })
})
