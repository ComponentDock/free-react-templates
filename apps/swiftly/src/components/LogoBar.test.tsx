import { render, screen } from '@testing-library/react'
import { LogoBar } from './LogoBar'

describe('LogoBar', () => {
  it('renders partner logos', () => {
    render(<LogoBar />)
    expect(screen.getByText('Puma')).toBeInTheDocument()
    expect(screen.getByText('Adobe')).toBeInTheDocument()
    expect(screen.getByText('Google')).toBeInTheDocument()
    expect(screen.getByText('PayPal')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<LogoBar />)
    expect(screen.getByRole('region', { name: /partner logos/i })).toBeInTheDocument()
  })
})
