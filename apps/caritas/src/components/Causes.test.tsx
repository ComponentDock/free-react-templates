import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'
import { CAUSES, CAUSES_TITLE, CAUSE_BUTTON_LABEL } from '../data'

describe('Causes', () => {
  it('renders 3 cause cards with photos, titles and read-more buttons', () => {
    const { container } = render(<Causes />)

    expect(
      screen.getByRole('heading', { level: 2, name: new RegExp(CAUSES_TITLE) }),
    ).toBeInTheDocument()

    const images = container.querySelectorAll('article img')
    expect(images).toHaveLength(3)
    expect(images[0]?.getAttribute('src')).toContain('caritas-cause-1')

    for (const cause of CAUSES) {
      expect(screen.getByRole('heading', { level: 3, name: cause.title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: CAUSE_BUTTON_LABEL })).toHaveLength(3)
  })

  it('renders 75% progress bars with labels', () => {
    const { container } = render(<Causes />)

    const bars = container.querySelectorAll('[role="progressbar"]')
    expect(bars).toHaveLength(3)
    for (const bar of bars) {
      expect(bar).toHaveAttribute('aria-valuenow', '75')
      expect(bar).toHaveAttribute('aria-valuemax', '100')
    }
    expect(screen.getAllByText('75%')).toHaveLength(3)
  })
})
