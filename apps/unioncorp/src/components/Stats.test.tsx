import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders section heading', () => {
    render(<Stats />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Technical Statistics')
  })

  it('renders subtitle', () => {
    render(<Stats />)
    expect(screen.getByText('Great Reviews For Our Services')).toBeInTheDocument()
  })

  it('renders all 4 stat values', () => {
    render(<Stats />)
    expect(screen.getByText('60+')).toBeInTheDocument()
    expect(screen.getByText('9,200+')).toBeInTheDocument()
    expect(screen.getByText('5,800+')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Stats className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
