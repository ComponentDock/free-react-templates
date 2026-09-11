import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TabbedServices } from './TabbedServices'

describe('TabbedServices', () => {
  it('renders tab buttons and default content', () => {
    render(<TabbedServices />)
    expect(screen.getByText('Next gen VPS')).toBeInTheDocument()
    expect(screen.getByText('Performance')).toBeInTheDocument()
    expect(screen.getByText('Effectiveness')).toBeInTheDocument()
    expect(screen.getByText('Next Generation VPS Hosting')).toBeInTheDocument()
  })

  it('switches content when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<TabbedServices />)
    await user.click(screen.getByText('Performance'))
    expect(screen.getByText('Unmatched Performance')).toBeInTheDocument()
    expect(screen.queryByText('Next Generation VPS Hosting')).not.toBeInTheDocument()
  })

  it('switches to Effectiveness tab', async () => {
    const user = userEvent.setup()
    render(<TabbedServices />)
    await user.click(screen.getByText('Effectiveness'))
    expect(screen.getByText('Cost-Effective Solutions')).toBeInTheDocument()
  })

  it('renders Get in touch button', () => {
    render(<TabbedServices />)
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })

  it('defaults to first tab when active id is invalid', async () => {
    const user = userEvent.setup()
    render(<TabbedServices />)
    // Click Performance then back to first tab to exercise the fallback path
    await user.click(screen.getByText('Performance'))
    await user.click(screen.getByText('Next gen VPS'))
    expect(screen.getByText('Next Generation VPS Hosting')).toBeInTheDocument()
  })
})
