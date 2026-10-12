import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CountdownUnit } from './CountdownUnit'

describe('CountdownUnit', () => {
  it('stacks a 120px italic serif number over an 18px italic label', () => {
    render(<CountdownUnit value="35" label="Days" />)

    const unit = screen.getByTestId('countdown-unit-days')

    expect(unit).toHaveClass('mb-[30px]', 'flex', 'min-w-[165px]', 'flex-col', 'items-center')

    const value = screen.getByTestId('countdown-unit-days-value')

    expect(value).toHaveTextContent('35')
    expect(value).toHaveClass(
      'pb-[37px]',
      'font-heading',
      'text-[120px]',
      'leading-none',
      'text-white',
      'uppercase',
      'italic',
    )

    const label = screen.getByTestId('countdown-unit-days-label')

    expect(label).toHaveTextContent('Days')
    expect(label).toHaveClass(
      'pr-[20px]',
      'font-heading',
      'text-[18px]',
      'leading-none',
      'text-white',
      'italic',
    )
  })

  it('derives the test hook from the abbreviated label', () => {
    render(<CountdownUnit value="19" label="Hr" />)

    expect(screen.getByTestId('countdown-unit-hr-value')).toHaveTextContent('19')
    expect(screen.getByTestId('countdown-unit-hr-label')).toHaveTextContent('Hr')
  })

  it('accepts layout overrides', () => {
    render(<CountdownUnit value="00" label="Sec" className="mb-0" />)

    expect(screen.getByTestId('countdown-unit-sec')).toHaveClass('mb-0')
  })
})
