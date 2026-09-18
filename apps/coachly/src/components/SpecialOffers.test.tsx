import { render, screen } from '@testing-library/react'
import { SpecialOffers } from './SpecialOffers'

describe('SpecialOffers', () => {
  it('renders both offer cards', () => {
    render(<SpecialOffers />)
    expect(screen.getByText('50% Off Programs')).toBeInTheDocument()
    expect(screen.getByText('More Programs')).toBeInTheDocument()
  })
})
