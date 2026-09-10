import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders all skill bars with correct labels and percentages', () => {
    render(<Skills />)
    expect(screen.getByText('Web Development')).toBeDefined()
    expect(screen.getByText('89%')).toBeDefined()
    expect(screen.getByText('Online Marketing')).toBeDefined()
    expect(screen.getByText('58%')).toBeDefined()
    expect(screen.getByText('Digital Media')).toBeDefined()
    expect(screen.getByText('49%')).toBeDefined()
    expect(screen.getByText('Photography')).toBeDefined()
    expect(screen.getByText('76%')).toBeDefined()
    expect(screen.getByText('Creative Design')).toBeDefined()
    expect(screen.getByText('64%')).toBeDefined()
  })

  it('renders the skills image', () => {
    render(<Skills />)
    expect(screen.getByAltText('Skills showcase')).toBeDefined()
  })

  it('has the correct section id', () => {
    const { container } = render(<Skills />)
    expect(container.querySelector('#skill-section')).not.toBeNull()
  })

  it('renders skill bar widths matching percentages', () => {
    const { container } = render(<Skills />)
    const bars = container.querySelectorAll('.bg-primary-500')
    expect(bars.length).toBe(5)
    expect(bars[0]).toHaveStyle({ width: '89%' })
    expect(bars[1]).toHaveStyle({ width: '58%' })
    expect(bars[2]).toHaveStyle({ width: '49%' })
    expect(bars[3]).toHaveStyle({ width: '76%' })
    expect(bars[4]).toHaveStyle({ width: '64%' })
  })
})
