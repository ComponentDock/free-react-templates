import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { GROUPS, PLANS } from '../content'
import { FeatureGroup } from './FeatureGroup'

const group = GROUPS[1]!

describe('FeatureGroup', () => {
  it('renders one body per group with a row-group header spanning all four columns', () => {
    const { container } = render(
      <table>
        <FeatureGroup group={group} plans={PLANS} open onToggle={() => {}} />
      </table>,
    )

    const body = container.querySelector('tbody')
    expect(body).toHaveAttribute('id', 'pt-g2-body')

    const head = screen.getByRole('rowheader', { name: /Collaboration/ })
    expect(head).toHaveAttribute('scope', 'rowgroup')
    expect(head).toHaveAttribute('colspan', '4')
    expect(head).toHaveAttribute('id', 'pt-g2')
  })

  it('keeps the count out of the toggle name and exposes the state on the button', () => {
    render(
      <table>
        <FeatureGroup group={group} plans={PLANS} open onToggle={() => {}} />
      </table>,
    )

    const toggle = screen.getByRole('button', { name: 'Collaboration' })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-controls', 'pt-g2-body')
    expect(screen.getByText('4 features')).toHaveAttribute('aria-hidden', 'true')
  })

  it('reports a closed group on the toggle and hides its rows', () => {
    const { container } = render(
      <table>
        <FeatureGroup group={group} plans={PLANS} open={false} onToggle={() => {}} />
      </table>,
    )

    expect(screen.getByRole('button', { name: 'Collaboration' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    const rows = [...container.querySelectorAll('tr.pt-row')]
    expect(rows).toHaveLength(4)
    expect(rows.every((row) => row.hasAttribute('hidden'))).toBe(true)
  })

  it('reports its own id when the toggle is clicked', async () => {
    const onToggle = vi.fn()
    render(
      <table>
        <FeatureGroup group={group} plans={PLANS} open onToggle={onToggle} />
      </table>,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Collaboration' }))

    expect(onToggle).toHaveBeenCalledWith('pt-g2')
  })

  it('draws exactly one chevron per group', () => {
    const { container } = render(
      <table>
        <FeatureGroup group={group} plans={PLANS} open onToggle={() => {}} />
      </table>,
    )

    expect(container.querySelectorAll('svg.pt-chev')).toHaveLength(1)
  })
})
