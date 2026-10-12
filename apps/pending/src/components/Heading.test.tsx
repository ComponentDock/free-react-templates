import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('is a 180px brush-script line in sentence case, centred with 55px below', () => {
    render(<Heading />)

    const heading = screen.getByTestId('heading')

    expect(heading.tagName).toBe('H3')
    expect(heading).toHaveTextContent('Not Long')
    expect(heading).toHaveClass(
      'font-script',
      'text-[180px]',
      'leading-[1.1]',
      'text-white',
      'text-center',
      'pb-[55px]',
    )
    expect(heading).not.toHaveClass('uppercase')
    expect(heading.className).not.toContain('tracking-')
  })

  it('steps the type down at each breakpoint without an uppercase transform', () => {
    render(<Heading />)

    expect(screen.getByTestId('heading')).toHaveClass(
      'max-[992px]:text-[160px]',
      'max-[768px]:text-[120px]',
      'max-[576px]:text-[80px]',
    )
  })

  it('renders its own headline copy when given children', () => {
    render(<Heading>Launching Shortly</Heading>)

    expect(screen.getByTestId('heading')).toHaveTextContent('Launching Shortly')
  })

  it('accepts a className override', () => {
    render(<Heading className="pb-0" />)

    expect(screen.getByTestId('heading')).toHaveClass('pb-0')
  })
})
