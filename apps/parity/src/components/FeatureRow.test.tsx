import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PLANS, type Feature } from '../content'
import { FeatureRow } from './FeatureRow'

const valueFeature: Feature = {
  id: 'pt-f1',
  label: 'Projects',
  cells: [
    { kind: 'value', value: '5' },
    { kind: 'value', value: 'Unlimited' },
    { kind: 'value', value: 'Unlimited' },
  ],
}

const mixedFeature: Feature = {
  id: 'pt-f6',
  label: 'Guests',
  cells: [{ kind: 'no' }, { kind: 'value', value: '10' }, { kind: 'yes' }],
}

function renderRow(feature: Feature, open = true) {
  return render(
    <table>
      <tbody>
        <FeatureRow groupId="pt-g1" feature={feature} plans={PLANS} open={open} />
      </tbody>
    </table>,
  )
}

describe('FeatureRow', () => {
  it('names the feature with a row header and wires every cell to group, feature and plan', () => {
    const { container } = renderRow(mixedFeature)

    const header = screen.getByRole('rowheader', { name: 'Guests' })
    expect(header).toHaveAttribute('headers', 'pt-g1')
    expect(header).toHaveAttribute('id', 'pt-f6')

    const cells = container.querySelectorAll('td')
    expect([...cells].map((cell) => cell.getAttribute('headers'))).toEqual([
      'pt-g1 pt-f6 pt-basic',
      'pt-g1 pt-f6 pt-team',
      'pt-g1 pt-f6 pt-business',
    ])
  })

  it('prints a value in a medium-weight span', () => {
    renderRow(valueFeature)

    const value = screen.getByText('5')
    expect(value).toHaveClass('pt-val')
  })

  it('gives a tick and a cross their own words for assistive tech', () => {
    const { container } = renderRow(mixedFeature)

    expect(screen.getAllByText('Included')).toHaveLength(1)
    expect(screen.getAllByText('Not included')).toHaveLength(1)
    expect(container.querySelectorAll('svg')).toHaveLength(2)
  })

  it('marks only the featured column with the tint class', () => {
    const { container } = renderRow(mixedFeature)
    const cells = [...container.querySelectorAll('td')]

    expect(cells.map((cell) => cell.classList.contains('pt-pop'))).toEqual([false, true, false])
  })

  it('hides rather than unmounts its cells when the group closes', () => {
    const { container } = renderRow(mixedFeature, false)
    const row = container.querySelector('tr')

    expect(row).toHaveAttribute('hidden')
    expect(container.querySelectorAll('td')).toHaveLength(3)
  })
})
