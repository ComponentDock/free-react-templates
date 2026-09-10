import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OfferedServices } from './OfferedServices'

describe('OfferedServices', () => {
  it('renders the section heading', () => {
    render(<OfferedServices />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Our Offered Services/i }),
    ).toBeInTheDocument()
  })

  it('renders all six service icons', () => {
    render(<OfferedServices />)
    expect(screen.getByText('Analytics Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Global Coverage')).toBeInTheDocument()
    expect(screen.getByText('Inbound Calls')).toBeInTheDocument()
    expect(screen.getByText('Email Support')).toBeInTheDocument()
    expect(screen.getByText('Live Chat')).toBeInTheDocument()
    expect(screen.getByText('Outbound Campaigns')).toBeInTheDocument()
  })

  it('renders the description and CTA button', () => {
    render(<OfferedServices />)
    expect(screen.getByText('Content Synchronization')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /View Details/i })).toBeInTheDocument()
  })
})
