import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('sets the heaviest italic serif at 90px in near-black, sentence case', () => {
    render(<Heading />)

    const heading = screen.getByRole('heading', { level: 3 })

    expect(heading).toHaveTextContent('On Its Way')
    expect(heading).toHaveClass(
      'pb-[34px]',
      'font-heading',
      'text-[90px]',
      'leading-[1.1]',
      'font-black',
      'text-ink',
      'italic',
      'max-[576px]:text-[60px]',
    )
    expect(heading.className).not.toContain('uppercase')
    expect(heading.className).not.toContain('tracking-')
  })

  it('accepts its own copy and layout overrides', () => {
    render(
      <Heading className="pb-0">
        <span>Something Better</span>
      </Heading>,
    )

    const heading = screen.getAllByRole('heading', { level: 3 })[0]

    expect(heading).toHaveTextContent('Something Better')
    expect(heading).toHaveClass('pb-0')
  })
})
