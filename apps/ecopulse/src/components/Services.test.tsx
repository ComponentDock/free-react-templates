import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(screen.getByText('Our Core Services')).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Clean Water')).toBeInTheDocument()
    expect(screen.getByText('Renewable Energy')).toBeInTheDocument()
    expect(screen.getByText('Protect Animals')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/provide access to clean/)).toBeInTheDocument()
    expect(screen.getByText(/renewable energy projects/)).toBeInTheDocument()
    expect(screen.getByText(/protect endangered species/)).toBeInTheDocument()
  })

  it('renders icons for each service', () => {
    render(<Services />)
    const icons = document.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(3)
  })
})
