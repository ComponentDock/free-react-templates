import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('sets the largest type on the page: 90px black-italic serif', () => {
    render(<Heading />)

    const heading = screen.getByTestId('heading')

    expect(heading.tagName).toBe('H3')
    expect(heading).toHaveTextContent('Almost Here')
    expect(heading).toHaveClass(
      'pb-[30px]',
      'font-heading',
      'text-[90px]',
      'leading-[1.1]',
      'font-black',
      'text-white',
      'italic',
      'max-[576px]:text-[65px]',
      'max-[992px]:text-center',
    )
    expect(heading).not.toHaveClass('uppercase')
  })

  it('renders supplied copy instead of the default', () => {
    render(<Heading className="pb-0">On the way</Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveTextContent('On the way')
    expect(heading).toHaveClass('pb-0')
  })
})
