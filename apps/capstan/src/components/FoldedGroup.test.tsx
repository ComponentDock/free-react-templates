import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FoldedGroup } from './FoldedGroup'
import { NAV } from '../lib/site'

const ITEM = NAV[1]!

/**
 * In-page anchors are neutralised before a press: jsdom turns a click on `href="#…"` into
 * hash navigation, which can race React's delegated handler and silently drop the test.
 */
function neutralize(anchor: HTMLElement) {
  anchor.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

function renderGroup(onNavigate: () => void = () => {}) {
  return render(
    <ul>
      <FoldedGroup item={ITEM} onNavigate={onNavigate} />
    </ul>,
  )
}

describe('FoldedGroup — the disclosure as the collapsing panel draws it', () => {
  it('leaves its sub-list open in the flow, full width on black behind its row', () => {
    renderGroup()

    const panel = screen.getByTestId('rigging-panel')

    expect(panel.className).toContain('w-full')
    expect(panel.className).toContain('basis-full')
    expect(panel.className).toContain('bg-bar-dark')
    expect(panel.className).toContain('border-l')
    expect(panel.className).toContain('border-panel-rule')
    expect(panel.className).toContain('rounded-none')
    expect(panel.className).not.toContain('absolute')
    expect(panel.className).not.toContain('shadow-panel')
    expect(within(panel).getAllByRole('link')).toHaveLength(4)

    for (const link of within(panel).getAllByRole('link')) {
      expect(link.className).toContain('text-[12px]')
      expect(link.className).toContain('text-panel-item')
      expect(link.className).toContain('px-6')
    }
  })

  it('carries the open-destination signal when its own row is the one already open', () => {
    render(
      <ul>
        <FoldedGroup item={{ ...ITEM, current: true }} onNavigate={() => {}} />
      </ul>,
    )

    const trigger = screen.getByRole('link', { name: ITEM.label })

    expect(trigger).toHaveAttribute('aria-current', 'page')
    expect(trigger.className).toContain('text-accent')
  })

  it('claims nothing about being closed, because nothing here is hidden', () => {
    renderGroup()

    const trigger = screen.getByRole('link', { name: ITEM.label })

    expect(trigger).not.toHaveAttribute('aria-expanded')
    expect(trigger).not.toHaveAttribute('aria-haspopup')
    expect(trigger.querySelector('svg')).not.toBeNull()
    expect(screen.getByTestId('rigging-row')).toBeInTheDocument()
  })

  it('reports an activation of the row and of any row under it', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    renderGroup(onNavigate)

    const trigger = screen.getByRole('link', { name: ITEM.label })
    const first = within(screen.getByTestId('rigging-panel')).getAllByRole('link')[0]!

    neutralize(trigger)
    neutralize(first)

    await user.click(trigger)
    await user.click(first)

    expect(onNavigate).toHaveBeenCalledTimes(2)
  })
})
