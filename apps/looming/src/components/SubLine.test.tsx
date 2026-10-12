import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubLine } from './SubLine'

describe('SubLine', () => {
  it('renders the soft 24px grey line under the heading', () => {
    render(<SubLine />)

    const line = screen.getByTestId('sub-line')

    expect(line).toHaveTextContent('Follow along for the first look.')
    expect(line).toHaveClass(
      'pb-[46px]',
      'font-sans',
      'text-[24px]',
      'leading-[1.2]',
      'text-subline',
    )
  })

  it('accepts its own copy and layout overrides', () => {
    render(<SubLine className="pb-0">Another line</SubLine>)

    const line = screen.getByTestId('sub-line')

    expect(line).toHaveTextContent('Another line')
    expect(line).toHaveClass('pb-0')
  })
})
