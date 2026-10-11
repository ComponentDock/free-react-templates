import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PillsShowcase } from './PillsShowcase'

describe('PillsShowcase', () => {
  it('renders the three pills over a light band with the first panel active', () => {
    const { container } = render(<PillsShowcase />)

    const section = container.querySelector('section')!
    expect(section.id).toBe('pills')
    expect(section.className).toContain('bg-light')
    expect(section.className).toContain('py-24')

    expect(screen.getByRole('heading', { level: 2, name: 'Navigation Pills' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Home' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Profile' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('tabpanel', { hidden: false })).toHaveTextContent('Far far away')
  })

  it('switches the active panel', async () => {
    render(<PillsShowcase />)

    await userEvent.click(screen.getByRole('tab', { name: 'Messages' }))

    expect(screen.getByRole('tab', { name: 'Messages' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Home' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('tabpanel', { hidden: false })).toHaveAttribute(
      'id',
      'sorbet-panel-messages',
    )
  })
})
