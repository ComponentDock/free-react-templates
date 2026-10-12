import { render, screen } from '@testing-library/react'
import { SITE_NAME } from '../lib/site'
import { Wordmark } from './Wordmark'

describe('Wordmark — the page own name at the bar left edge', () => {
  it('is a link to the top of the page, in the design own white', () => {
    render(<Wordmark />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark).toHaveAttribute('href', '#top')
    expect(wordmark).toHaveTextContent(SITE_NAME)
    expect(wordmark.className).toContain('text-[20px]')
    expect(wordmark.className).toContain('leading-[36px]')
    expect(wordmark.className).toContain('uppercase')
    expect(wordmark.className).toContain('text-white')
    expect(wordmark.className).toContain('mr-4')
    expect(wordmark.className).toContain('focus-visible:outline-white')
  })
})
