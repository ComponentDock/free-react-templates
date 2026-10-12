import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('sets an upright 60px upper-case serif with no size change at any width', () => {
    render(<Heading />)

    const heading = screen.getByTestId('heading')

    expect(heading.tagName).toBe('H3')
    expect(heading).toHaveClass(
      'pb-[34px]',
      'font-heading',
      'text-[60px]',
      'leading-[1.1]',
      'font-medium',
      'text-ink',
      'uppercase',
    )
    expect(heading).not.toHaveClass('italic')
    expect(heading).not.toHaveClass('font-black')
    expect(heading.className).not.toContain('max-[576px]:text-')
  })

  it('renders its own headline by default and takes children', () => {
    const { unmount } = render(<Heading />)

    expect(screen.getByTestId('heading')).toHaveTextContent('Nearly There')

    unmount()
    render(<Heading className="pb-0">Ready Soon</Heading>)

    expect(screen.getByTestId('heading')).toHaveTextContent('Ready Soon')
    expect(screen.getByTestId('heading')).toHaveClass('pb-0')
  })
})
