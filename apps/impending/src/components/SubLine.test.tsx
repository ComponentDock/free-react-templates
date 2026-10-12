import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubLine } from './SubLine'

describe('SubLine', () => {
  it('sets the soft grey sans line under the heading', () => {
    render(<SubLine />)

    const line = screen.getByTestId('sub-line')

    expect(line.tagName).toBe('P')
    expect(line).toHaveTextContent('Be first to know the moment we go live.')
    expect(line).toHaveClass(
      'font-sans',
      'text-[24px]',
      'leading-[1.2]',
      'text-subline',
      'max-[992px]:text-center',
    )
  })

  it('renders supplied copy instead of the default', () => {
    render(<SubLine className="pt-[5px]">Watch this space</SubLine>)

    const line = screen.getByTestId('sub-line')

    expect(line).toHaveTextContent('Watch this space')
    expect(line).toHaveClass('pt-[5px]')
  })
})
