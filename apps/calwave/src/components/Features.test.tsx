import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Powerful Features')
  })

  it('renders the subtitle', () => {
    render(<Features />)
    expect(screen.getByText(/everything you need to manage your schedule/i)).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Real-Time Sync')).toBeInTheDocument()
    expect(screen.getByText('Smart Reminders')).toBeInTheDocument()
    expect(screen.getByText('Usage Analytics')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/keep your calendar in sync/i)).toBeInTheDocument()
    expect(screen.getByText(/set custom reminders/i)).toBeInTheDocument()
    expect(screen.getByText(/track your productivity/i)).toBeInTheDocument()
  })

  it('renders the features section with id="features"', () => {
    const { container } = render(<Features />)
    expect(container.querySelector('#features')).toBeInTheDocument()
  })

  it('renders SVG icons for each feature', () => {
    const { container } = render(<Features />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBe(3)
  })
})
