import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'
import { SITE_NAME, WORDMARK_NAME, WORDMARK_TRADE } from '../lib/site'

describe('Wordmark — the two-line lockup on the brand strip', () => {
  it('draws its own name over its own trade, uppercase in black', () => {
    render(<Wordmark />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark).toHaveAttribute('href', '#top')
    expect(wordmark.className).toContain('text-[20px]')
    expect(wordmark.className).toContain('font-bold')
    expect(wordmark.className).toContain('uppercase')
    expect(wordmark.className).toContain('mb-[30px]')
    expect(wordmark).toHaveTextContent(WORDMARK_NAME)

    const trade = wordmark.querySelector('span')

    expect(trade).toHaveTextContent(WORDMARK_TRADE)
    expect(trade?.className).toContain('block')
    expect(trade?.className).toContain('text-[12px]')
  })
})
