import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('sets a hairline-weight uppercase heading at 72px with no letter spacing', () => {
    render(<Heading />)

    const heading = screen.getByTestId('heading')

    expect(heading.tagName).toBe('H3')
    expect(heading).toHaveTextContent('Arriving Soon')
    expect(heading).toHaveClass(
      'pb-[35px]',
      'text-center',
      'font-sans',
      'text-[72px]',
      'leading-[1.1]',
      'font-thin',
      'text-white',
      'uppercase',
      'max-[576px]:text-[55px]',
    )
    // the tracking in the design is the face's own sidebearings
    expect(heading.className).not.toContain('tracking-')
    expect(heading.className).not.toContain('font-heading')
  })

  it('accepts its own copy and layout overrides', () => {
    render(<Heading className="pb-0">Launching Shortly</Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveTextContent('Launching Shortly')
    expect(heading).toHaveClass('pb-0')
  })
})
