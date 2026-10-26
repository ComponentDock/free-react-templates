import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PlanList } from './PlanList'

describe('PlanList', () => {
  it('labels the list with a paragraph, so the page keeps 1 h1 + 3 h2', () => {
    render(<PlanList title="What's included" features={['1 shared inbox']} />)

    const label = screen.getByText("What's included")
    expect(label.tagName).toBe('P')
    expect(label).toHaveClass('plan-list-title')
  })

  it('keeps the label in sentence case — the stylesheet uppercases it', () => {
    render(<PlanList title="Everything in Team, plus" features={['Unlimited inboxes']} />)

    expect(screen.getByText('Everything in Team, plus').textContent).toBe(
      'Everything in Team, plus',
    )
  })

  it('renders one row per feature, each opening with a check disc', () => {
    render(
      <PlanList
        title="What's included"
        features={['1 shared inbox', 'Saved replies', '7-day conversation history']}
      />,
    )

    const list = screen.getByRole('list')
    expect(list).toHaveClass('plan-list')
    const rows = screen.getAllByRole('listitem')
    expect(rows).toHaveLength(3)
    rows.forEach((row) => {
      expect(row.querySelectorAll('svg')).toHaveLength(1)
      expect(row.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    })
  })

  it('keeps each label verbatim, including the apostrophe and the hyphens', () => {
    render(
      <PlanList
        title="Everything in Starter, plus"
        features={['5 shared inboxes', 'Single sign-on and audit log', '7-day conversation history']}
      />,
    )

    const labels = screen.getAllByRole('listitem').map((row) => row.textContent)
    expect(labels).toEqual([
      '5 shared inboxes',
      'Single sign-on and audit log',
      '7-day conversation history',
    ])
  })

  it('renders a five-row list for the featured plan without changing the component', () => {
    render(
      <PlanList
        title="Everything in Starter, plus"
        features={['a', 'b', 'c', 'd', 'e']}
      />,
    )

    expect(screen.getAllByRole('listitem')).toHaveLength(5)
  })
})
