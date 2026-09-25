import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ChartsSection } from './ChartsSection'

describe('ChartsSection', () => {
  it('has testid charts-section', () => {
    render(<ChartsSection />)
    expect(screen.getByTestId('charts-section')).toBeInTheDocument()
  })

  it('renders section title', () => {
    render(<ChartsSection />)
    expect(screen.getByText('Charts')).toBeInTheDocument()
  })

  it('renders the charts background image', () => {
    render(<ChartsSection />)
    const img = screen.getByRole('img', { name: /charts/i })
    expect(img).toBeInTheDocument()
  })
})
