import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the brand name with a mint second half', () => {
    const { container } = render(<Wordmark />)

    const wordmark = container.firstElementChild
    expect(wordmark).toHaveTextContent('Skyvault')
    expect(wordmark).toHaveClass('font-heading', 'font-semibold', 'text-white')
    expect(container.querySelector('.text-mint')).toHaveTextContent('vault')
  })

  it('accepts a caller class for the header and footer sizes', () => {
    const { container } = render(<Wordmark className="text-[47px]" />)

    expect(container.firstElementChild).toHaveClass('text-[47px]')
  })
})
