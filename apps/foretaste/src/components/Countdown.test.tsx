import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  it('renders four labelled groups of two tiles each', () => {
    render(<Countdown />)

    expect(screen.getAllByTestId('digit-tile')).toHaveLength(8)
    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByRole('list', { name: label })).toBeInTheDocument()
    }
  })

  it('separates the groups with three colons', () => {
    render(<Countdown />)

    expect(screen.queryByTestId('colon-days')).not.toBeInTheDocument()
    expect(screen.getByTestId('colon-hours')).toBeInTheDocument()
    expect(screen.getByTestId('colon-minutes')).toBeInTheDocument()
    expect(screen.getByTestId('colon-seconds')).toBeInTheDocument()
  })

  it('caps the wrapper width at both smaller breakpoints', () => {
    render(<Countdown className="mt-2" />)

    expect(screen.getByTestId('countdown')).toHaveClass(
      'flex',
      'w-full',
      'max-w-full',
      'flex-wrap',
      'justify-center',
      'mb-[20px]',
      'max-[1200px]:max-w-[470px]',
      'max-[1200px]:mr-[10px]',
      'max-[576px]:max-w-[210px]',
      'mt-2',
    )
  })
})
