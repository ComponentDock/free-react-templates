import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders 5 partner names', () => {
    render(<Partners />)
    expect(screen.getAllByText(/Publisher/)).toHaveLength(5)
  })

  it('has proper aria-label', () => {
    render(<Partners />)
    expect(screen.getByRole('region', { name: 'Partners' })).toBeInTheDocument()
  })
})
