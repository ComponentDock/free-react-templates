import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SupportCampaign } from './SupportCampaign'

describe('SupportCampaign', () => {
  it('renders section heading', () => {
    render(<SupportCampaign />)
    expect(screen.getByText('Support a Campaign or Fundraiser')).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<SupportCampaign />)
    expect(screen.getByText(/French Revolution/)).toBeInTheDocument()
  })

  it('renders three campaign cards', () => {
    render(<SupportCampaign />)
    const names = ['Build a School', 'Food for Families', 'Emergency Relief']
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('displays funding amounts', () => {
    render(<SupportCampaign />)
    expect(screen.getByText(/Raised: \$4,500/)).toBeInTheDocument()
    expect(screen.getByText(/Raised: \$8,200/)).toBeInTheDocument()
    expect(screen.getByText(/Raised: \$3,100/)).toBeInTheDocument()
  })

  it('renders progress bars with correct aria attributes', () => {
    render(<SupportCampaign />)
    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars).toHaveLength(3)
    expect(progressBars[0]).toHaveAttribute('aria-valuenow', '45')
    expect(progressBars[1]).toHaveAttribute('aria-valuenow', '68')
    expect(progressBars[2]).toHaveAttribute('aria-valuenow', '39')
  })
})
