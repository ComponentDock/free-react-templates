import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Looking For A Job?')).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Browse thousands of opportunities/)).toBeInTheDocument()
  })

  it('renders Browse Jobs button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Browse Jobs')).toBeInTheDocument()
  })

  it('Browse Jobs links to home section', () => {
    render(<CtaBanner />)
    const link = screen.getByText('Browse Jobs')
    expect(link.closest('a')).toHaveAttribute('href', '#home')
  })
})
