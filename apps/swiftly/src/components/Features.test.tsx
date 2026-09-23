import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders section title and subtitle', () => {
    render(<Features />)
    expect(screen.getByText('Awesome Features')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Cool Features' })).toBeInTheDocument()
  })

  it('renders all 6 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Cash Collection')).toBeInTheDocument()
    expect(screen.getByText('Analytics')).toBeInTheDocument()
    expect(screen.getByText('Payment')).toBeInTheDocument()
    expect(screen.getByText('Invoicing')).toBeInTheDocument()
    expect(screen.getByText('Rewards')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })
})
