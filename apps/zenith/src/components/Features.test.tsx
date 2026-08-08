import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { level: 2, name: /everything you need to ship faster/i }),
    ).toBeInTheDocument()
  })

  it('renders six feature cards with titles', () => {
    render(<Features />)
    for (const title of [
      'Workflow Automation',
      'Real-time Collaboration',
      'Advanced Analytics',
      'Enterprise Security',
      'API & Integrations',
      '24/7 Support',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders a blurb under each card title', () => {
    render(<Features />)
    expect(screen.getByText(/automate repetitive tasks/i)).toBeInTheDocument()
    expect(screen.getByText(/work together in real time/i)).toBeInTheDocument()
    expect(screen.getByText(/deep insights into performance/i)).toBeInTheDocument()
  })
})
