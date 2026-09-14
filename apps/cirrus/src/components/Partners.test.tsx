import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders five partner logos', () => {
    render(<Partners />)
    const logos = screen.getAllByRole('img')
    expect(logos).toHaveLength(5)
  })

  it('renders correct alt text for each logo', () => {
    render(<Partners />)
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByAltText(`Partner ${i}`)).toBeInTheDocument()
    }
  })
})
