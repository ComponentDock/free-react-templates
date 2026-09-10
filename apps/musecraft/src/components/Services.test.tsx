import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section title and all 8 services', () => {
    render(<Services />)
    expect(screen.getByText('Services', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument()
    expect(screen.getByText('Web')).toBeInTheDocument()
    expect(screen.getByText('Graphic')).toBeInTheDocument()
    expect(screen.getByText('Services', { selector: 'h3' })).toBeInTheDocument()
    expect(screen.getByText('PSD')).toBeInTheDocument()
    expect(screen.getByText('HTML')).toBeInTheDocument()
    expect(screen.getByText('PHP')).toBeInTheDocument()
  })

  it('shows section number 01', () => {
    render(<Services />)
    expect(screen.getByText('01')).toBeInTheDocument()
  })
})
