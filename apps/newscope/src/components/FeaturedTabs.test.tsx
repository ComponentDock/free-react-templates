import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { FeaturedTabs } from './FeaturedTabs'

describe('FeaturedTabs', () => {
  it('renders the heading and default tab content', () => {
    render(<FeaturedTabs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured News')
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Top Fashion Trends Dominating 2026')).toBeInTheDocument()
  })

  it('switches tab content on click', async () => {
    const user = userEvent.setup()
    render(<FeaturedTabs />)
    await user.click(screen.getByRole('tab', { name: 'Entertainment' }))
    expect(screen.getByText('Summer Blockbuster Roundup')).toBeInTheDocument()
    expect(screen.queryByText('Top Fashion Trends Dominating 2026')).not.toBeInTheDocument()
  })

  it('renders all tab buttons', () => {
    render(<FeaturedTabs />)
    const tabs = ['All', 'Entertainment', 'Fashion', 'Life Style', 'Technology', 'Travel']
    tabs.forEach((tab) => {
      expect(screen.getByRole('tab', { name: tab })).toBeInTheDocument()
    })
  })

  it('marks the active tab with aria-selected', async () => {
    const user = userEvent.setup()
    render(<FeaturedTabs />)
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true')
    await user.click(screen.getByRole('tab', { name: 'Fashion' }))
    expect(screen.getByRole('tab', { name: 'Fashion' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'false')
  })
})
