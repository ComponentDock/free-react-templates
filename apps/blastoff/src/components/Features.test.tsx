import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('shows the eyebrow, heading and subcopy', () => {
    render(<Features />)

    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Everything you need to ship' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/A complete development platform/)).toBeInTheDocument()
  })

  it('shows the six feature cards with titles and blurbs', () => {
    render(<Features />)

    for (const title of [
      'CI/CD Pipeline',
      'Real-time Analytics',
      'Team Collaboration',
      'Auto-scaling',
      'Security First',
      'Developer API',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/Automated builds and deployments/)).toBeInTheDocument()
    expect(screen.getByText(/Live dashboards for traffic/)).toBeInTheDocument()
    expect(screen.getByText(/Scale from zero to millions/)).toBeInTheDocument()
  })
})
