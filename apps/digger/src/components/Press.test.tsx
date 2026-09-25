import { render, screen } from '@testing-library/react'
import { Press } from './Press'

describe('Press', () => {
  it('renders press section with articles', () => {
    render(<Press />)
    expect(screen.getByText('Press & News')).toBeInTheDocument()
    expect(screen.getByText('Digger Wins Safety Excellence Award')).toBeInTheDocument()
    expect(screen.getByText('New Sustainable Mining Partnership Announced')).toBeInTheDocument()
    expect(screen.getByText('Record-Breaking Quarter for Mining Operations')).toBeInTheDocument()
  })

  it('renders article dates', () => {
    render(<Press />)
    expect(screen.getByText('April 19, 2024')).toBeInTheDocument()
    expect(screen.getByText('March 28, 2024')).toBeInTheDocument()
  })
})
