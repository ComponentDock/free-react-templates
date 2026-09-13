import { render, screen } from '@testing-library/react'
import { Copyright } from './Copyright'

describe('Copyright', () => {
  it('renders copyright text', () => {
    render(<Copyright />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Copyright />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
