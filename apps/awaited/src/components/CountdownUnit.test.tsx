import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CountdownUnit } from './CountdownUnit'

describe('CountdownUnit', () => {
  it('stacks a heavy number over a small label indented under its left side', () => {
    render(<CountdownUnit value="35" label="Days" />)

    const unit = screen.getByTestId('countdown-unit-days')
    const value = screen.getByTestId('countdown-unit-days-value')
    const label = screen.getByTestId('countdown-unit-days-label')

    expect(unit).toHaveClass('mb-[30px]', 'flex', 'w-[195px]', 'flex-col', 'items-center')
    expect(value).toHaveTextContent('35')
    expect(value).toHaveClass(
      'pb-[9px]',
      'font-black',
      'text-[120px]',
      'leading-none',
      'text-white',
      'uppercase',
    )
    expect(label).toHaveTextContent('Days')
    expect(label).toHaveClass(
      'self-start',
      'pl-[35px]',
      'text-[12px]',
      'leading-none',
      'text-white',
      'uppercase',
    )
  })

  it('accepts layout overrides', () => {
    render(<CountdownUnit value="09" label="Seconds" className="mb-0" />)

    expect(screen.getByTestId('countdown-unit-seconds')).toHaveClass('mb-0')
  })
})
