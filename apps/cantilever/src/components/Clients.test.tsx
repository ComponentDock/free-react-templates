import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders the client logo strip with at least four names', () => {
    render(<Clients />)
    const strip = screen.getByRole('region', { name: /trusted by/i })
    expect(strip).toBeInTheDocument()
    expect(strip.querySelectorAll('span').length).toBeGreaterThanOrEqual(4)
  })
})
