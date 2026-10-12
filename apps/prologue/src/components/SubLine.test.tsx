import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubLine } from './SubLine'

describe('SubLine', () => {
  it('is the muted 24px line under the heading', () => {
    render(<SubLine />)

    const line = screen.getByTestId('sub-line')

    expect(line.tagName).toBe('P')
    expect(line).toHaveTextContent("Leave your email and we'll write the day it goes live.")
    expect(line).toHaveClass(
      'pb-[46px]',
      'font-sans',
      'text-[24px]',
      'leading-[1.2]',
      'text-subline',
    )
  })

  it('takes its own copy and layout overrides', () => {
    render(<SubLine className="pb-0">Coming shortly</SubLine>)

    const line = screen.getByTestId('sub-line')

    expect(line).toHaveTextContent('Coming shortly')
    expect(line).toHaveClass('pb-0')
  })
})
