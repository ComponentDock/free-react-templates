import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CountdownUnit } from './CountdownUnit'

describe('CountdownUnit', () => {
  it('hangs a small italic label under the left edge of a bold serif number', () => {
    render(<CountdownUnit value="35" label="Days" />)

    const unit = screen.getByTestId('countdown-unit-days')

    expect(unit).toHaveClass(
      'mb-[40px]',
      'flex',
      'w-[90px]',
      'flex-col',
      'max-[992px]:mx-[15px]',
      'max-[992px]:items-center',
    )

    const value = screen.getByTestId('countdown-unit-days-value')

    expect(value).toHaveTextContent('35')
    expect(value).toHaveClass(
      'pb-[30px]',
      'font-heading',
      'text-[60px]',
      'leading-none',
      'font-bold',
      'text-white',
    )
    expect(value).not.toHaveClass('text-center')

    const label = screen.getByTestId('countdown-unit-days-label')

    expect(label).toHaveTextContent('Days')
    expect(label).toHaveClass('font-heading', 'text-[14px]', 'leading-none', 'text-white', 'italic')
  })

  it('accepts layout overrides', () => {
    render(<CountdownUnit value="00" label="Hours" className="mb-0" />)

    expect(screen.getByTestId('countdown-unit-hours')).toHaveClass('mb-0')
  })
})
