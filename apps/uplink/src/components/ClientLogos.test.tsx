import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders five client brand placeholders', () => {
    render(<ClientLogos />)
    for (const brand of ['Nexora', 'Vertex', 'Cloudio', 'Skyline', 'DataForge']) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
  })
})
