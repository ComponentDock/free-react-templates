import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Foretaste } from './Foretaste'

describe('Foretaste', () => {
  it('stacks the column bands in reference order', () => {
    render(<Foretaste />)

    const column = screen.getByTestId('column')

    expect(column.tagName).toBe('MAIN')
    expect(column).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'pt-[160px]',
      'pb-[215px]',
      'max-[576px]:pt-[80px]',
      'max-[576px]:pb-[100px]',
    )
    expect(Array.from(column.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'monogram',
      'headline',
      'countdown',
    ])
  })

  it('sits the social row and the credit line outside the column but inside the shell', () => {
    render(<Foretaste />)

    const shell = screen.getByTestId('shell')
    const socialRow = within(shell).getByTestId('social-row')
    const attribution = within(shell).getByTestId('attribution')

    expect(within(shell).getByTestId('column')).toBeInTheDocument()
    expect(socialRow.parentElement).toBe(shell)
    expect(attribution.parentElement).toBe(shell)
    expect(attribution).toHaveClass('absolute', 'inset-x-0', 'bottom-0', 'text-center')
  })
})
