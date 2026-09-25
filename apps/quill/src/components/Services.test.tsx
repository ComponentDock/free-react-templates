import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading and 3 service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Marketing Goals')).toBeInTheDocument()
    expect(screen.getByText('Targeting Vision')).toBeInTheDocument()
  })

  it('has proper aria-label', () => {
    render(<Services />)
    expect(screen.getByRole('region', { name: 'Services' })).toBeInTheDocument()
  })
})
