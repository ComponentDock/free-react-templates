import { render, screen } from '@testing-library/react'
import { StatsBar } from './StatsBar'

describe('StatsBar', () => {
  it('renders three stat items', () => {
    render(<StatsBar />)
    expect(screen.getByText('Chat With Us')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Fast Support')).toBeInTheDocument()
  })

  it('renders stat counts', () => {
    render(<StatsBar />)
    expect(screen.getByText('1,200+')).toBeInTheDocument()
    expect(screen.getByText('850+')).toBeInTheDocument()
    expect(screen.getByText('24/7')).toBeInTheDocument()
  })
})
