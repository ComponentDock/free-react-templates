import { render, screen } from '@testing-library/react'
import { Expertise } from './Expertise'

describe('Expertise', () => {
  it('renders the section heading', () => {
    render(<Expertise />)
    expect(screen.getByText('Expertise')).toBeInTheDocument()
    expect(screen.getByText('06')).toBeInTheDocument()
  })

  it('renders all four skill bars with percentages', () => {
    render(<Expertise />)
    expect(screen.getByText('HTML')).toBeInTheDocument()
    expect(screen.getByText('81%')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
    expect(screen.getByText('93%')).toBeInTheDocument()
    expect(screen.getByText('PSD')).toBeInTheDocument()
    expect(screen.getByText('72%')).toBeInTheDocument()
    expect(screen.getByText('DESIGN')).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
  })

  it('renders progress bars with correct aria attributes', () => {
    render(<Expertise />)
    const bars = screen.getAllByRole('progressbar')
    expect(bars).toHaveLength(4)
    expect(bars[0]).toHaveAttribute('aria-valuenow', '81')
    expect(bars[3]).toHaveAttribute('aria-valuenow', '99')
  })
})
