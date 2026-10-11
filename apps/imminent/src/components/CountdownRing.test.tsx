import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CountdownRing } from './CountdownRing'

describe('CountdownRing', () => {
  it('renders one hairline circle stacking a big digit over its label', () => {
    render(<CountdownRing value="35" label="Days" />)

    const ring = screen.getByTestId('countdown-ring-days')

    expect(ring).toHaveClass(
      'mx-[10px]',
      'mb-[15px]',
      'flex',
      'h-[155px]',
      'w-[155px]',
      'flex-col',
      'items-center',
      'justify-center',
      'rounded-full',
      'border',
      'border-ring',
    )

    const [digit, label] = Array.from(ring.children) as HTMLElement[]

    expect(digit).toHaveTextContent('35')
    expect(digit).toHaveClass(
      'pb-[9px]',
      'font-heading',
      'text-[40px]',
      'leading-none',
      'font-bold',
      'text-white',
    )
    expect(label).toHaveTextContent('Days')
    // sentence case: the label is not upper-cased
    expect(label).toHaveClass('font-sans', 'text-[12px]', 'leading-none', 'text-white')
    expect(label).not.toHaveClass('uppercase')
  })

  it('accepts a className override', () => {
    render(<CountdownRing value="00" label="Seconds" className="mb-0" />)

    expect(screen.getByTestId('countdown-ring-seconds')).toHaveClass('mb-0')
  })
})
