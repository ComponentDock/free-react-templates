import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NAV } from '../lib/site'
import type { PanelLevel } from '../lib/styles'
import { PanelRow } from './PanelRow'

function renderRow(label: string, level: PanelLevel) {
  const node = NAV.find((item) => item.label === label)

  if (!node) {
    throw new Error(`NAV no longer carries ${label}`)
  }

  return render(
    <ul>
      <PanelRow node={node} level={level} />
    </ul>,
  )
}

describe('PanelRow', () => {
  it('renders a leaf row at 10px/20px in ink, indent and type scaled by depth', () => {
    const level1 = renderRow('Services', 1)

    const services = screen.getByRole('link', { name: 'Services' })

    expect(services).toHaveClass('block', 'py-[10px]', 'pr-5', 'pl-5', 'text-[20px]', 'text-ink')
    expect(services).toHaveClass('hover:text-accent', 'transition-colors', 'duration-300')
    expect(services).not.toHaveAttribute('aria-current')

    level1.unmount()

    const level2 = renderRow('Services', 2)

    expect(screen.getByRole('link', { name: 'Services' })).toHaveClass('pl-10', 'text-[16px]')

    level2.unmount()

    renderRow('Services', 3)
    expect(screen.getByRole('link', { name: 'Services' })).toHaveClass('pl-[60px]', 'text-[16px]')
  })

  it('draws the current destination in accent', () => {
    renderRow('Home', 1)

    const home = screen.getByRole('link', { name: 'Home' })

    expect(home).toHaveAttribute('aria-current', 'page')
    expect(home).toHaveClass('text-accent')
  })

  it('carries a round 36x36 expander on a row with children, shut to start with', () => {
    renderRow('About Us', 1)

    const expander = screen.getByRole('button', { name: 'Show About Us submenu' })

    expect(expander).toHaveAttribute('aria-expanded', 'false')
    expect(expander.className.split(' ')).toEqual(
      expect.arrayContaining([
        'absolute',
        'top-[10px]',
        'right-0',
        'h-9',
        'w-9',
        'rounded-full',
        'hover:bg-soft',
      ]),
    )
    expect(expander.querySelector('svg')).toHaveClass('h-3', 'w-3', 'rotate-180')
    expect(expander.className.split(' ')).not.toContain('bg-soft')

    expect(screen.queryByRole('link', { name: 'Pricing' })).toBeNull()
  })

  it('expands and collapses its own level without touching the level above', async () => {
    const user = userEvent.setup()

    renderRow('About Us', 1)

    await user.click(screen.getByRole('button', { name: 'Show About Us submenu' }))

    const expanded = screen.getByRole('button', { name: 'Hide About Us submenu' })

    expect(expanded).toHaveAttribute('aria-expanded', 'true')
    expect(expanded).toHaveClass('bg-soft')
    expect(expanded.querySelector('svg')).toHaveClass('rotate-0')

    // Level 2 rows are 40px indented at 16px; the nested row then opens level 3 at 60px.
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveClass('pl-10', 'text-[16px]')
    expect(screen.getByRole('link', { name: 'Our Team' })).toHaveAttribute('aria-current', 'page')

    await user.click(screen.getByRole('button', { name: 'Show More submenu' }))

    expect(screen.getByRole('link', { name: 'Careers' })).toHaveClass('pl-[60px]', 'text-[16px]')

    await user.click(screen.getByRole('button', { name: 'Hide More submenu' }))

    expect(screen.queryByRole('link', { name: 'Careers' })).toBeNull()
    expect(screen.getByRole('link', { name: 'Our Team' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Hide About Us submenu' }))

    expect(screen.queryByRole('link', { name: 'Our Team' })).toBeNull()
  })
})
