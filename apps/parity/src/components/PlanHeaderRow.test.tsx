import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK, PLANS } from '../content'
import { PlanHeaderRow } from './PlanHeaderRow'

function renderHead() {
  return render(
    <table>
      <PlanHeaderRow plans={PLANS} />
    </table>,
  )
}

describe('PlanHeaderRow', () => {
  it('renders a corner cell and one column header per plan', () => {
    const { container } = renderHead()

    expect(container.querySelector('.pt-corner')).toHaveTextContent(
      'Prices in USD, per user, billed monthly.',
    )
    expect(screen.getAllByRole('columnheader').map((cell) => cell.id)).toEqual([
      'pt-basic',
      'pt-team',
      'pt-business',
    ])
  })

  it('marks the featured column by fill, radius and an inside pill only', () => {
    renderHead()

    const team = screen.getByRole('columnheader', { name: /Team/ })
    expect(team).toHaveClass('pt-pop')
    expect(screen.getByText('Popular')).toHaveClass('pt-tag')
    expect(screen.getAllByText('Popular')).toHaveLength(1)
  })

  it('prints name, price and qualifier for each plan', () => {
    renderHead()

    expect(screen.getByText('$0')).toHaveClass('pt-price')
    expect(screen.getAllByText('per user / month')).toHaveLength(2)
    expect(screen.getByText('free for 3 users')).toHaveClass('pt-per')
  })

  it('points every CTA at Component Dock with a plan-specific name', () => {
    renderHead()

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
    expect(links.map((link) => link.textContent)).toEqual([
      'Sign up with Basic',
      'Start trial with Team',
      'Start trial with Business',
    ])
    for (const link of links) {
      expect(link).toHaveAttribute('href', COMPONENT_DOCK)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer noopener')
    }
  })

  it('never ships a dead in-page href', () => {
    const { container } = renderHead()

    expect(container.querySelector('a[href="#"]')).toBeNull()
  })
})
