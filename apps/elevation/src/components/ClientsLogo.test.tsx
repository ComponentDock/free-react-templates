import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClientsLogo } from './ClientsLogo'

describe('ClientsLogo', () => {
  it('renders at least four client names', () => {
    render(<ClientsLogo />)
    for (const name of ['Vertex & Co', 'Arcform Studio', 'Skyline Works', 'Granite Group']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
