import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Services/i })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('SEO Optimization')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Cyber Security')).toBeInTheDocument()
    expect(screen.getByText('Performance')).toBeInTheDocument()
    expect(screen.getByText('Digital Strategy')).toBeInTheDocument()
  })
})
