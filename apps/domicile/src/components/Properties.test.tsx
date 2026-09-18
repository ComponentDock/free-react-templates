import { render, screen } from '@testing-library/react'
import { Properties } from './Properties'
import { describe, expect, it } from 'vitest'
describe('Properties', () => {
  it('renders heading', () => {
    render(<Properties />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Wide Range of Properties' }),
    ).toBeInTheDocument()
  })
  it('renders all 6 property cards', () => {
    render(<Properties />)
    expect(screen.getByText('853 S Lucerne Blvd')).toBeInTheDocument()
    expect(screen.getByText('625 S. Berendo St')).toBeInTheDocument()
    expect(screen.getByText('320 Oak Avenue')).toBeInTheDocument()
    expect(screen.getByText('115 Maple Drive')).toBeInTheDocument()
    expect(screen.getByText('890 Sunset Blvd')).toBeInTheDocument()
    expect(screen.getByText('456 Palm Street')).toBeInTheDocument()
  })
})
