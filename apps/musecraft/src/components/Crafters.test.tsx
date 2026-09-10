import { render, screen } from '@testing-library/react'
import { Crafters } from './Crafters'

describe('Crafters', () => {
  it('renders section title and team members', () => {
    render(<Crafters />)
    expect(screen.getByText('Crafters', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Robert Williams')).toBeInTheDocument()
    expect(screen.getByText('SEO Master')).toBeInTheDocument()
    expect(screen.getByText('PSD Guru')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('shows section number 03', () => {
    render(<Crafters />)
    expect(screen.getByText('03')).toBeInTheDocument()
  })
})
