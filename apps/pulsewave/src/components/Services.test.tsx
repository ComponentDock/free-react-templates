import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'We Provide A Lot of Cool Services',
    )
  })

  it('renders all six service cards', () => {
    render(<Services />)
    expect(screen.getByText('Marketing')).toBeInTheDocument()
    expect(screen.getByText('SEO')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Creative')).toBeInTheDocument()
    expect(screen.getByText('Optimization')).toBeInTheDocument()
    expect(screen.getByText('Business Strategy')).toBeInTheDocument()
  })

  it('renders the "Our Services" link', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /our services/i })).toBeInTheDocument()
  })

  it('has grid layout with correct classes', () => {
    render(<Services />)
    const grid = screen.getByText('Marketing').closest('.grid')!
    expect(grid.className).toContain('grid-cols-1')
  })
})
