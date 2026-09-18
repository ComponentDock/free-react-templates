import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstallationTimeline } from './InstallationTimeline'

describe('InstallationTimeline', () => {
  it('renders the heading and four process steps', () => {
    render(<InstallationTimeline />)
    expect(screen.getByRole('heading', { name: 'How It Works' })).toBeInTheDocument()
    expect(screen.getByText(/Going solar with Sunflux is simple/i)).toBeInTheDocument()
    for (const title of [
      'Free Consultation',
      'Design & Permits',
      'Professional Installation',
      'Activation & Monitoring',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders the step numbers', () => {
    render(<InstallationTimeline />)
    for (const num of ['01', '02', '03', '04']) {
      expect(screen.getByText(num)).toBeInTheDocument()
    }
  })

  it('renders step descriptions', () => {
    render(<InstallationTimeline />)
    expect(screen.getByText(/We assess your energy usage/i)).toBeInTheDocument()
    expect(screen.getByText(/Certified crews install your system/i)).toBeInTheDocument()
  })
})
