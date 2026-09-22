import { render, screen } from '@testing-library/react'
import { Membership } from './Membership'

describe('Membership', () => {
  it('renders heading and pricing cards', () => {
    render(<Membership />)
    expect(screen.getByRole('heading', { name: /membership plans/i })).toBeInTheDocument()
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('$17')).toBeInTheDocument()
    expect(screen.getByText('$57')).toBeInTheDocument()
    expect(screen.getByText('$98')).toBeInTheDocument()
  })

  it('renders Start Now buttons', () => {
    render(<Membership />)
    const buttons = screen.getAllByText('Start Now')
    expect(buttons).toHaveLength(3)
  })
})
