import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MajorCauses } from './MajorCauses'

describe('MajorCauses', () => {
  it('renders section heading', () => {
    render(<MajorCauses />)
    expect(screen.getByText('Our Major Causes')).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<MajorCauses />)
    expect(screen.getByText(/French Revolution/)).toBeInTheDocument()
  })

  it('renders three cause cards', () => {
    render(<MajorCauses />)
    const titles = ['Clean Water Initiative', 'Education for All', 'Medical Aid Relief']
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('displays funding amounts', () => {
    render(<MajorCauses />)
    expect(screen.getByText(/Raised: \$7,689/)).toBeInTheDocument()
    expect(screen.getByText(/Raised: \$5,420/)).toBeInTheDocument()
    expect(screen.getByText(/Raised: \$12,300/)).toBeInTheDocument()
  })

  it('renders progress bars with correct aria attributes', () => {
    render(<MajorCauses />)
    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars).toHaveLength(3)
    expect(progressBars[0]).toHaveAttribute('aria-valuenow', '76')
    expect(progressBars[1]).toHaveAttribute('aria-valuenow', '36')
    expect(progressBars[2]).toHaveAttribute('aria-valuenow', '61')
  })

  it('renders Donate Here links', () => {
    render(<MajorCauses />)
    const links = screen.getAllByText('Donate Here')
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#donate')
    }
  })

  it('renders cause images', () => {
    const { container } = render(<MajorCauses />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
