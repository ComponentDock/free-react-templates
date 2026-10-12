import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('is the page h1 at 16px, uppercase, bold and white — no accent glyph, no full stop', () => {
    const { container } = render(<Wordmark />)
    const heading = screen.getByRole('heading', { level: 1 })
    const link = screen.getByRole('link', { name: 'Slidenav, back to the top' })

    expect(heading).toContainElement(link)
    expect(heading).toHaveClass('text-[16px]', 'font-bold')
    expect(link).toHaveAttribute('href', '#home')
    expect(link).toHaveClass('uppercase', 'text-white')
    expect(link.textContent).toBe('Slidenav')
    expect(container.querySelectorAll('h1 span')).toHaveLength(0)
  })
})
