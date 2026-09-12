import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText(/Kick your/)).toBeDefined()
    expect(screen.getByText('feet')).toBeDefined()
  })

  it('renders all 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Analyze Your Goal')).toBeDefined()
    expect(screen.getByText('Work Hard On It')).toBeDefined()
    expect(screen.getByText('Improve Your Performance')).toBeDefined()
    expect(screen.getByText('Achieve Your Perfect Body')).toBeDefined()
  })

  it('renders services subheading', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeDefined()
  })

  it('has programs section id', () => {
    const { container } = render(<Services />)
    expect(container.querySelector('#programs')).toBeDefined()
  })
})
