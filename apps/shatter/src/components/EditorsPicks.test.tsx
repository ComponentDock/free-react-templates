import { render, screen } from '@testing-library/react'
import { EditorsPicks } from './EditorsPicks'

describe('EditorsPicks', () => {
  it('renders the section heading', () => {
    render(<EditorsPicks />)
    expect(screen.getByText("Editors' Picks")).toBeInTheDocument()
  })

  it('renders 4 editor pick cards', () => {
    render(<EditorsPicks />)
    expect(screen.getByText('AI Revolution in Healthcare Diagnostics')).toBeInTheDocument()
    expect(screen.getByText('Startups Reshaping the Fintech Landscape')).toBeInTheDocument()
    expect(screen.getByText('Climate Summit Yields New Commitments')).toBeInTheDocument()
    expect(screen.getByText('The Rise of Independent Cinema')).toBeInTheDocument()
  })

  it('has correct aria-labelledby', () => {
    render(<EditorsPicks />)
    const section = screen.getByLabelText("Editors' Picks")
    expect(section).toHaveAttribute('aria-labelledby', 'editors-heading')
  })
})
