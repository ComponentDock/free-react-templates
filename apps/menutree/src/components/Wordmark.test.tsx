import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('is the page h1 at 24px, white over the band with an accent full stop', () => {
    const { container } = render(<Wordmark stuck={false} />)
    const heading = screen.getByRole('heading', { level: 1 })
    const link = screen.getByRole('link', { name: 'Menutree, back to the top' })

    expect(heading).toContainElement(link)
    expect(link).toHaveAttribute('href', '#home')
    expect(link).toHaveClass('text-[24px]', 'font-medium', 'text-white')
    expect(container.querySelector('h1 span')).toHaveClass('text-brand')
  })

  it('swaps the wordmark to the accent colour once the header is pinned', () => {
    render(<Wordmark stuck />)

    expect(screen.getByRole('link', { name: 'Menutree, back to the top' })).toHaveClass(
      'text-brand',
    )
  })
})
