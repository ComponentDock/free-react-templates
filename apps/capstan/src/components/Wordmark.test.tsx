import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'
import { SITE_NAME } from '../lib/site'

describe('Wordmark — the single line at the strip own left end', () => {
  it('draws its own name as one uppercase line pointing at the top of the sheet', () => {
    render(<Wordmark />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark).toHaveAttribute('href', '#top')
    expect(wordmark.className).toContain('text-[20px]')
    expect(wordmark.className).toContain('leading-[36px]')
    expect(wordmark.className).toContain('uppercase')
    expect(wordmark.className).toContain('text-black')
    expect(wordmark.className).toContain('max-lg:text-white')
    expect(wordmark.className).toContain('py-[5px]')
    expect(wordmark.className).toContain('mr-4')
    expect(wordmark).toHaveTextContent(SITE_NAME)
    expect(wordmark.querySelector('span')).toBeNull()
  })
})
