import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('displays three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Exciting Opportunity')).toBeInTheDocument()
    expect(screen.getByText('Vetted ICO Marketplace')).toBeInTheDocument()
    expect(screen.getByText('Diverse Profit Ways')).toBeInTheDocument()
  })
})
