import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GoalCard } from './GoalCard'
import { GOAL } from '../data/accounts'

describe('GoalCard', () => {
  it('shows the mint pill when the goal is on track', () => {
    render(<GoalCard goal={GOAL} />)

    const pill = screen.getByText('On track')
    expect(pill.className).toContain('bg-green-200')
    expect(pill.className).toContain('text-green-900')
  })

  it('drops the pill when the goal is behind', () => {
    render(<GoalCard goal={{ ...GOAL, onTrack: false }} />)

    expect(screen.queryByText('On track')).toBeNull()
  })

  it('draws the ring from the sums, upright and starting at twelve o clock', () => {
    const { container } = render(<GoalCard goal={GOAL} />)

    const ring = screen.getByRole('img', { name: '68 percent saved' })
    expect(ring.getAttribute('viewBox')).toBe('0 0 120 120')
    expect(ring.getAttribute('class')).toContain('rotate-[-90deg]')

    const fill = container.querySelector('circle[stroke="#fde68a"]')!
    expect(fill.getAttribute('pathLength')).toBe('100')
    expect(fill.getAttribute('stroke-dasharray')).toBe('68 100')
    expect(fill.getAttribute('stroke-linecap')).toBe('round')

    const texts = [...container.querySelectorAll('text')]
    expect(texts.map((text) => text.textContent)).toEqual(['68%', 'saved'])
    texts.forEach((text) => expect(text.getAttribute('transform')).toBe('rotate(90 60 60)'))
  })

  it('prints the goal name, the sums and the derived month', () => {
    render(<GoalCard goal={GOAL} />)

    expect(screen.getByText('Kyoto in spring')).toBeInTheDocument()
    expect(screen.getByText('€2,720')).toBeInTheDocument()
    expect(screen.getByText(/of €4,000/)).toBeInTheDocument()
    expect(screen.getByText('€320 a month · target January 2027')).toBeInTheDocument()
  })

  it('ships a real button that explains the demo instead of a dead anchor', async () => {
    const user = userEvent.setup()
    render(<GoalCard goal={GOAL} />)

    const cta = screen.getByRole('button', { name: 'Add money' })
    expect(cta).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('status')).toBeNull()

    await user.click(cta)
    expect(cta).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('status')).toHaveTextContent('this demo has no transfer service')

    await user.click(cta)
    expect(cta).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('draws no image and no second button', () => {
    const { container } = render(<GoalCard goal={GOAL} />)

    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(screen.getAllByRole('button')).toHaveLength(1)
  })
})
