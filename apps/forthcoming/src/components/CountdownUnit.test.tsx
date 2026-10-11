import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CountdownUnit } from './CountdownUnit'

describe('CountdownUnit', () => {
  it('stacks a thin 70px digit over an italic serif label', () => {
    render(<CountdownUnit label="Days" value="35" />)

    const unit = screen.getByTestId('countdown-unit-days')

    expect(unit).toHaveClass(
      'mb-[20px]',
      'flex',
      'w-[100px]',
      'flex-col',
      'items-center',
      'justify-center',
    )

    const [digit, label] = Array.from(unit.children)

    expect(digit).toHaveClass('pb-[4px]', 'text-[70px]', 'leading-none', 'font-light', 'text-white')
    expect(digit).toHaveTextContent('35')
    expect(label).toHaveClass('font-serif', 'text-[18px]', 'leading-none', 'text-white', 'italic')
    expect(label).toHaveTextContent('Days')
  })

  it('accepts a className override', () => {
    render(<CountdownUnit label="Hours" value="00" className="mb-0" />)

    expect(screen.getByTestId('countdown-unit-hours')).toHaveClass('mb-0')
  })
})
