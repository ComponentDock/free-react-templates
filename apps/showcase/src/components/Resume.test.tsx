import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Resume } from './Resume'
import { circularSkills, linearSkills } from '../data'

describe('Resume', () => {
  it('shows the heading and four pill tabs with the Education panel active by default', () => {
    render(<Resume />)
    expect(screen.getByRole('heading', { level: 2, name: 'Resume' })).toBeInTheDocument()
    const tabs = screen.getAllByRole('tab')
    expect(tabs.map((tab) => tab.textContent)).toEqual([
      'Education',
      'Experience',
      'Skills',
      'Awards',
    ])
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByText('Bachelor of Science in Computer Science')).toBeInTheDocument()
    expect(screen.getByText('2024-2028')).toBeInTheDocument()
  })

  it('switches panels when a tab is clicked and keeps ARIA state in sync', async () => {
    const user = userEvent.setup()
    render(<Resume />)

    await user.click(screen.getByRole('tab', { name: /Experience/ }))
    expect(screen.getByRole('tab', { name: /Experience/ })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: /Education/ })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByText('Software Developer')).toBeInTheDocument()
    expect(screen.queryByText('Bachelor of Science in Computer Science')).not.toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /Awards/ }))
    expect(screen.getByText('Top 10 Web Developer')).toBeInTheDocument()
  })
})

describe('Resume skills panel', () => {
  it('exposes every meter as a progressbar with an aria-valuenow', async () => {
    const user = userEvent.setup()
    render(<Resume />)
    await user.click(screen.getByRole('tab', { name: /Skills/ }))

    for (const skill of circularSkills) {
      const meter = screen.getByRole('progressbar', {
        name: `${skill.label} ${skill.pct}% ${skill.level}`,
      })
      expect(meter).toHaveAttribute('aria-valuenow', String(skill.pct))
    }
    for (const skill of linearSkills) {
      const bar = screen.getByRole('progressbar', { name: skill.label })
      expect(bar).toHaveAttribute('aria-valuenow', String(skill.pct))
      expect(bar.querySelector('div')).toHaveStyle({ width: `${skill.pct}%` })
    }
    expect(screen.getAllByText('Advanced')).toHaveLength(2) // CSS3 + JavaScript meters
  })
})
