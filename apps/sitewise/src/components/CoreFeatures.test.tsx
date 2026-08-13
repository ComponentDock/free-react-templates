import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CoreFeatures } from './CoreFeatures'

describe('CoreFeatures', () => {
  it('renders the heading and the Features tab active by default', () => {
    render(<CoreFeatures />)

    expect(screen.getByRole('heading', { level: 2, name: /Core Features/ })).toBeInTheDocument()

    const featuresTab = screen.getByRole('button', { name: 'Features' })
    const advancedTab = screen.getByRole('button', { name: 'Advanced Features' })
    expect(featuresTab).toHaveAttribute('aria-pressed', 'true')
    expect(advancedTab).toHaveAttribute('aria-pressed', 'false')

    expect(screen.getByRole('heading', { name: 'Free Domain for 1st Year' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '24h Dedicated Support' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'SSD-NVMe Storage' })).not.toBeInTheDocument()
  })

  it('switches the visible feature set when the other tab is clicked', async () => {
    const user = userEvent.setup()
    render(<CoreFeatures />)

    await user.click(screen.getByRole('button', { name: 'Advanced Features' }))

    expect(screen.getByRole('button', { name: 'Advanced Features' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('heading', { name: 'SSD-NVMe Storage' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Global CDN & Caching' })).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'Free Domain for 1st Year' }),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Features' }))
    expect(screen.getByRole('heading', { name: 'Free Domain for 1st Year' })).toBeInTheDocument()
  })
})
