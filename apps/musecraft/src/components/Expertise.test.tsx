import { render, screen } from '@testing-library/react'
import { Expertise } from './Expertise'

describe('Expertise', () => {
  it('renders section title and all skill bars', () => {
    render(<Expertise />)
    expect(screen.getByText('Expertise', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('HTML')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
    expect(screen.getByText('PSD')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('81%')).toBeInTheDocument()
    expect(screen.getByText('93%')).toBeInTheDocument()
    expect(screen.getByText('72%')).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
  })

  it('shows section number 06', () => {
    render(<Expertise />)
    expect(screen.getByText('06')).toBeInTheDocument()
  })
})
