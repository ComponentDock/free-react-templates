import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Headline } from './Headline'

describe('Headline', () => {
  it('renders a thin 50px uppercase headline with wide tracking', () => {
    render(<Headline />)

    const heading = screen.getByTestId('headline')

    expect(heading.tagName).toBe('H3')
    expect(heading).toHaveTextContent('Almost Here')
    expect(heading).toHaveClass(
      'pt-[30px]',
      'pb-[100px]',
      'text-center',
      'font-heading',
      'text-[50px]',
      'leading-[1.1]',
      'font-thin',
      'tracking-[10px]',
      'text-white',
      'uppercase',
    )
  })

  it('keeps its size at every breakpoint', () => {
    render(<Headline />)

    expect(screen.getByTestId('headline').className).not.toMatch(/max-\[/)
  })

  it('accepts its own copy and layout overrides', () => {
    render(<Headline className="self-stretch">Arriving</Headline>)

    expect(screen.getByTestId('headline')).toHaveTextContent('Arriving')
    expect(screen.getByTestId('headline')).toHaveClass('self-stretch')
  })
})
