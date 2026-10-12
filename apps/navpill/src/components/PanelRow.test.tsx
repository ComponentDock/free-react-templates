import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NAV, isParent, type NavNode } from '../lib/site'
import { PanelRow } from './PanelRow'

function itemAt(index: number): NavNode {
  const node = NAV[index]

  if (!node) {
    throw new Error(`NAV lost item ${index}`)
  }

  return node
}

const home = itemAt(0)
const explore = itemAt(1)

function renderRow(node: NavNode = home, level: 1 | 2 | 3 = 1) {
  return render(
    <ul>
      <PanelRow node={node} level={level} />
    </ul>,
  )
}

describe('PanelRow', () => {
  it('renders a top-level leaf as a 20px ink row over 20px of left padding', () => {
    renderRow()

    const link = screen.getByRole('link', { name: 'Home' })

    expect(link).toHaveClass('pl-5', 'text-[20px]', 'py-[10px]', 'text-accent')
    expect(link).toHaveAttribute('aria-current', 'page')
    expect(link).toHaveAttribute('href', '#top')
    expect(screen.queryByRole('button')).toBeNull()
  })

  it('renders a plain sibling at the same scale, in ink', () => {
    renderRow(itemAt(2))

    const link = screen.getByRole('link', { name: 'Showcase' })

    expect(link).toHaveClass('pl-5', 'text-[20px]', 'text-ink')
    expect(link).not.toHaveAttribute('aria-current')
  })

  it('gives a parent row a round 36x36 expander whose sub-rows start collapsed', () => {
    renderRow(explore)

    const link = screen.getByRole('link', { name: 'Explore' })
    const expander = screen.getByRole('button', { name: 'Show Explore submenu' })

    expect(link).toHaveClass('pl-5', 'text-[20px]')
    expect(expander).toHaveClass('h-9', 'w-9', 'rounded-full', 'top-[10px]', 'right-0')
    expect(expander).toHaveAttribute('aria-expanded', 'false')
    expect(expander.querySelector('svg')).toHaveClass('rotate-0')
    expect(screen.queryByRole('link', { name: 'Overview' })).toBeNull()
  })

  it('expands one level at a time and keeps each row independent of the others', async () => {
    const user = userEvent.setup()

    renderRow(explore)

    await user.click(screen.getByRole('button', { name: 'Show Explore submenu' }))

    const expander = screen.getByRole('button', { name: 'Hide Explore submenu' })
    expect(expander).toHaveAttribute('aria-expanded', 'true')
    expect(expander.querySelector('svg')).toHaveClass('rotate-180')

    const levelTwo = screen.getByRole('link', { name: 'Overview' })
    expect(levelTwo).toHaveClass('pl-10', 'text-[16px]')
    expect(screen.getByRole('link', { name: 'Guides' })).toHaveClass('pl-10')

    await user.click(screen.getByRole('button', { name: 'Show Resources submenu' }))

    const levelThree = screen.getByRole('link', { name: 'Documentation' })
    expect(levelThree).toHaveClass('pl-[60px]', 'text-[16px]')
    expect(screen.getAllByRole('link', { name: 'Status' })).toHaveLength(1)

    // The outer row stayed open while the inner one opened: state lives per row.
    expect(screen.getByRole('link', { name: 'Overview' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Hide Explore submenu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Hide Resources submenu' }))
    expect(screen.queryByRole('link', { name: 'Documentation' })).toBeNull()
    expect(screen.getByRole('link', { name: 'Overview' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Hide Explore submenu' }))
    expect(screen.queryByRole('link', { name: 'Overview' })).toBeNull()
    expect(screen.getByRole('button', { name: 'Show Explore submenu' })).toBeInTheDocument()
  })

  it('lists a parent row in ink and a current row in accent, at any depth', () => {
    const { container } = renderRow(explore, 2)

    const list = container.querySelector('ul') as HTMLUListElement

    expect(list.querySelectorAll('li')).toHaveLength(1)
    expect(within(list).getByRole('link', { name: 'Explore' })).toHaveClass('text-ink')
    expect(isParent(explore)).toBe(true)
  })
})
