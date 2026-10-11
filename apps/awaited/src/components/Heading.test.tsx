import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('sets the launch line in the thinnest, widest-tracked type on the page', () => {
    render(<Heading />)

    const heading = screen.getByTestId('heading')

    expect(heading.tagName).toBe('H3')
    expect(heading).toHaveTextContent('Launching Soon')
    expect(heading).toHaveClass(
      'pb-[40px]',
      'text-center',
      'text-[72px]',
      'leading-[1.1]',
      'font-thin',
      'uppercase',
      'tracking-[15px]',
      'text-heading',
      'max-[576px]:text-[45px]',
    )
  })

  it('accepts its own copy and layout overrides', () => {
    render(<Heading className="pb-[20px]">Nearly Here</Heading>)

    expect(screen.getByTestId('heading')).toHaveTextContent('Nearly Here')
    expect(screen.getByTestId('heading')).toHaveClass('pb-[20px]')
  })
})
