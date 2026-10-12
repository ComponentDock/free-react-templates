import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NAV, type NavItem } from '../lib/site'
import { PanelRow } from './PanelRow'

const noop = () => {}

function itemAt(index: number): NavItem {
  const item = NAV[index]

  if (!item) {
    throw new Error(`NAV lost item ${index}`)
  }

  return item
}

function renderRow(item: NavItem = itemAt(0), onNavigate: () => void = noop) {
  return render(
    <ul>
      <PanelRow item={item} onNavigate={onNavigate} />
    </ul>,
  )
}

describe('PanelRow', () => {
  it('renders the current row as a blue 20px row over 20px of padding', () => {
    renderRow()

    const link = screen.getByRole('link', { name: 'Home' })

    expect(link).toHaveClass('px-5', 'text-[20px]', 'text-brand')
    expect(link).toHaveAttribute('aria-current', 'page')
    expect(link).toHaveAttribute('href', '#home')
    expect(screen.queryByRole('button')).toBeNull()
  })

  it('renders a plain row at the same scale, in ink and without a current marker', () => {
    renderRow(itemAt(2))

    const link = screen.getByRole('link', { name: 'Services' })

    expect(link).toHaveClass('text-[20px]', 'text-ink', 'py-[10px]')
    expect(link).not.toHaveAttribute('aria-current')
    expect(link).toHaveAttribute('href', '#services')
  })

  it('reports the activation back so the panel can close on it', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    renderRow(itemAt(4), onNavigate)

    const link = screen.getByRole('link', { name: 'Contact' })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })

    await user.click(link)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
