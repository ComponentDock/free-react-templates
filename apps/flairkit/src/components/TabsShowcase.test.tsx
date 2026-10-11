import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TabsShowcase } from './TabsShowcase'

describe('TabsShowcase', () => {
  it('renders both tab cards with their headings', () => {
    render(<TabsShowcase />)

    expect(
      screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent),
    ).toEqual(['Tab', 'Tab with Icon'])
  })

  it('renders Profile, Messages and Settings in both cards', () => {
    render(<TabsShowcase />)

    const [plain, icon] = screen.getAllByRole('tablist')

    expect(
      within(plain as HTMLElement)
        .getAllByRole('tab')
        .map((tab) => tab.textContent),
    ).toEqual(['Profile', 'Messages', 'Settings'])
    expect(
      within(icon as HTMLElement)
        .getAllByRole('tab')[0]
        ?.querySelector('svg'),
    ).not.toBeNull()
  })

  it('switches the active pillar and the visible pane with React state', async () => {
    const user = userEvent.setup()
    render(<TabsShowcase />)

    const [plain, icon] = screen.getAllByRole('tablist')
    const profile = within(plain as HTMLElement).getByRole('tab', { name: 'Profile' })
    const settings = within(icon as HTMLElement).getByRole('tab', { name: 'Settings' })

    expect(profile).toHaveAttribute('aria-selected', 'true')

    await user.click(within(plain as HTMLElement).getByRole('tab', { name: 'Messages' }))
    await user.click(settings)

    expect(profile).toHaveAttribute('aria-selected', 'false')
    expect(settings).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('tabpanel')).toHaveLength(2)
  })
})
