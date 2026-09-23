import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and number', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument()
    expect(screen.getByText('Web')).toBeInTheDocument()
    expect(screen.getByText('Graphic')).toBeInTheDocument()
  })
})
