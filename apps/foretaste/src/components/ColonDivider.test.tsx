import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColonDivider } from './ColonDivider'

describe('ColonDivider', () => {
  it('collapses the leading divider and hides the days colon', () => {
    render(<ColonDivider variant="days" caption="Days" />)

    expect(screen.getByTestId('divider-days')).toHaveClass(
      'relative',
      'h-[120px]',
      'w-0',
      'max-[1200px]:w-[10px]',
      'max-[576px]:w-[10px]',
    )
    expect(screen.queryByTestId('colon-days')).not.toBeInTheDocument()
  })

  it('draws a 68px colon between the remaining groups', () => {
    render(<ColonDivider variant="hours" caption="Hrs" />)

    expect(screen.getByTestId('divider-hours')).toHaveClass('w-[68px]')
    expect(screen.getByTestId('colon-hours')).toHaveTextContent(':')
    expect(screen.getByTestId('colon-hours')).toHaveClass(
      'flex',
      'h-full',
      'items-center',
      'justify-center',
      'font-digit',
      'text-[120px]',
      'text-white',
    )
  })

  it('drops the minutes colon one breakpoint earlier than the rest', () => {
    render(<ColonDivider variant="minutes" caption="Min" />)

    expect(screen.getByTestId('divider-minutes')).toHaveClass('w-[68px]', 'max-[1200px]:w-[10px]')
    expect(screen.getByTestId('colon-minutes')).toHaveClass(
      'max-[1200px]:hidden',
      'max-[576px]:hidden',
    )
  })

  it('leaves the seconds colon visible down to the first breakpoint', () => {
    render(<ColonDivider variant="seconds" caption="Sec" />)

    expect(screen.getByTestId('colon-seconds')).not.toHaveClass('max-[1200px]:hidden')
  })

  it('paints a bold uppercase caption under the group', () => {
    render(<ColonDivider variant="hours" caption="Hrs" />)

    expect(screen.getByTestId('caption')).toHaveTextContent('Hrs')
    expect(screen.getByTestId('caption')).toHaveClass(
      'absolute',
      'top-full',
      'left-full',
      'w-[193px]',
      'pt-[23px]',
      'text-center',
      'text-[14px]',
      'font-bold',
      'tracking-[3px]',
      'uppercase',
      'text-white',
    )
  })

  it('accepts layout overrides', () => {
    render(<ColonDivider variant="seconds" caption="Sec" className="self-stretch" />)

    expect(screen.getByTestId('divider-seconds')).toHaveClass('self-stretch')
  })
})
