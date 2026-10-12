import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroBlock } from './HeroBlock'

describe('HeroBlock', () => {
  it("stacks the heading, the sub-line and the subscribe bar in the panel's middle band", () => {
    render(<HeroBlock />)

    const block = screen.getByTestId('hero-block')

    expect(block).toHaveClass('w-full', 'pt-[100px]', 'pb-[90px]', 'pl-[48px]', 'max-[768px]:pl-0')
    expect(block.children[0]).toBe(screen.getByTestId('heading'))
    expect(block.children[1]).toBe(screen.getByTestId('sub-line'))
    expect(block.children[2]).toBe(screen.getByTestId('subscribe-bar'))
  })

  it('accepts layout overrides', () => {
    render(<HeroBlock className="pb-0" />)

    expect(screen.getByTestId('hero-block')).toHaveClass('pb-0')
  })
})
