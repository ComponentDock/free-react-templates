import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TabsBadgesShowcase } from './TabsBadgesShowcase'

describe('TabsBadgesShowcase', () => {
  it('renders the tabs and badge set on the light band', () => {
    const { container } = render(<TabsBadgesShowcase />)

    const section = container.querySelector('section')!
    expect(section.id).toBe('navigationTabs')
    expect(section.className).toContain('bg-light')

    expect(screen.getAllByRole('tab')).toHaveLength(3)
    expect(screen.getByRole('tab', { name: 'Home' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Vokalia')
    expect(screen.getByRole('heading', { name: 'Badges' })).toBeInTheDocument()
    expect(screen.getByText('Primary').className).toContain('border-black')
    expect(screen.getByText('Danger').className).toContain('font-bold')
  })

  it('swaps the visible pane when another tab is picked', async () => {
    render(<TabsBadgesShowcase />)

    await userEvent.click(screen.getByRole('tab', { name: 'Messages' }))

    expect(screen.getByRole('tab', { name: 'Messages' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Home' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('tabpanel')).toHaveTextContent('paradisematic')
  })
})
