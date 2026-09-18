import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Qualified Lawyers')).toBeInTheDocument()
    expect(screen.getByText('Solved Cases')).toBeInTheDocument()
    expect(screen.getByText('Trusted Clients')).toBeInTheDocument()
    expect(screen.getByText('Achievements')).toBeInTheDocument()
  })

  it('renders stat values', () => {
    render(<Stats />)
    expect(screen.getByText('596+')).toBeInTheDocument()
    expect(screen.getByText('20,650+')).toBeInTheDocument()
    expect(screen.getByText('2.5k')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
  })
})
