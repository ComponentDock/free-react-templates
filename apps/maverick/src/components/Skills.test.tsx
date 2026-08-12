import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders the heading and six labelled progress bars', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { level: 2, name: 'My Skills' })).toBeInTheDocument()
    const bars = screen.getAllByRole('progressbar')
    expect(bars).toHaveLength(6)
    expect(screen.getByText('Photoshop')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })

  it('sets the correct aria values and fill widths', () => {
    const { container } = render(<Skills />)
    const photoshop = screen.getByRole('progressbar', { name: 'Photoshop 90 percent' })
    expect(photoshop).toHaveAttribute('aria-valuenow', '90')
    const fill = container.querySelector('div[style*="width"]')
    expect(fill).toHaveStyle({ width: '90%' })
  })
})
