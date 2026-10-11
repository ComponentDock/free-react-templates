import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TabsShowcase } from './TabsShowcase'

describe('TabsShowcase', () => {
  it('renders the two tab cards with Profile active', () => {
    render(<TabsShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Tabs')

    const tablists = screen.getAllByRole('tablist')
    expect(tablists).toHaveLength(2)

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(6)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]!.className).toContain('bg-kit-primary')
    expect(tabs[3]!.className).toContain('bg-kit-secondary')

    const panels = screen.getAllByRole('tabpanel')
    panels.forEach((panel) => expect(panel.textContent).toMatch(/mist enveloped the ship/i))
  })

  it('switches panes independently per card', async () => {
    const user = userEvent.setup()
    render(<TabsShowcase />)

    const first = within(screen.getAllByRole('tablist')[0]!)
    const second = within(screen.getAllByRole('tablist')[1]!)

    await user.click(first.getByRole('tab', { name: 'Messages' }))
    expect(first.getByRole('tab', { name: 'Messages' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('tabpanel')[0]!.textContent).toMatch(/equipment and instruments/i)

    await user.click(second.getByRole('tab', { name: 'Settings' }))
    expect(second.getByRole('tab', { name: 'Settings' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('tabpanel')[1]!.textContent).toMatch(/cloudless and of a deep dark/i)
    expect(screen.getAllByRole('tabpanel')[0]!.textContent).toMatch(/equipment and instruments/i)
  })
})
