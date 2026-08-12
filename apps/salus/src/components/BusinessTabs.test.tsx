import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BusinessTabs } from './BusinessTabs'
import { businessTabs } from '../data'

describe('BusinessTabs', () => {
  it('renders the three tab buttons', () => {
    render(<BusinessTabs />)

    for (const tab of businessTabs) {
      expect(screen.getByRole('tab', { name: tab.title })).toBeInTheDocument()
    }
  })

  it('shows the first tab panel by default', () => {
    render(<BusinessTabs />)

    const panel = screen.getByRole('tabpanel')
    expect(panel.textContent).toMatch(businessTabs[0].title)
    expect(screen.getByRole('tab', { name: businessTabs[0].title })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  it('switches the panel when another tab is clicked', async () => {
    const user = userEvent.setup()
    render(<BusinessTabs />)

    await user.click(screen.getByRole('tab', { name: businessTabs[2].title }))

    const panel = screen.getByRole('tabpanel')
    expect(panel.textContent).toMatch(businessTabs[2].title)
    expect(screen.getByRole('tab', { name: businessTabs[2].title })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: businessTabs[0].title })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })
})
