import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SaleBanner } from './SaleBanner'

describe('SaleBanner', () => {
  it('renders sale number and text', () => {
    render(<SaleBanner />)
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('Just hurry up limited offer!')).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<SaleBanner />)
    expect(screen.getByRole('region', { name: 'Sale banner' })).toBeInTheDocument()
  })
})
