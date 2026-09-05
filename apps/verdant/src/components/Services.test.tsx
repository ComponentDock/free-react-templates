import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText(/our services/i)).toBeInTheDocument()
  })

  it('renders 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText(/plants care/i)).toBeInTheDocument()
    expect(screen.getByText(/pressure washing/i)).toBeInTheDocument()
    expect(screen.getByText(/tree service/i)).toBeInTheDocument()
  })

  it('renders video play button', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /play video/i })).toBeInTheDocument()
  })
})
