import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MiddleBlock } from './MiddleBlock'

describe('MiddleBlock', () => {
  it('centres the heading over the countdown with the design padding', () => {
    render(<MiddleBlock />)

    const block = screen.getByTestId('middle-block')

    expect(block).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'px-[15px]',
      'pt-[50px]',
      'pb-[120px]',
    )
    expect(Array.from(block.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'heading',
      'countdown',
    ])
  })

  it('accepts layout overrides', () => {
    render(<MiddleBlock className="grow" />)

    expect(screen.getByTestId('middle-block')).toHaveClass('grow')
  })
})
