import { render, screen } from '@testing-library/react'
import { Crafters } from './Crafters'

describe('Crafters', () => {
  it('renders the section heading', () => {
    render(<Crafters />)
    expect(screen.getByText('Crafters')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders all three team members', () => {
    render(<Crafters />)
    expect(screen.getByText('Robert Williams')).toBeInTheDocument()
    expect(screen.getByText('Lead Designer')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('SEO Master')).toBeInTheDocument()
    expect(screen.getByText('Ann Peterson')).toBeInTheDocument()
    expect(screen.getByText('PSD Guru')).toBeInTheDocument()
  })
})
