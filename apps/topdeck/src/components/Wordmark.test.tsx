import { render, screen } from '@testing-library/react'
import { SITE_NAME } from '../lib/site'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the app’s own name, white, 20px and uppercase, lifted the source’s 7px', () => {
    render(<Wordmark />)

    const heading = screen.getByRole('heading', { level: 1 })
    const link = screen.getByRole('link', { name: SITE_NAME })

    expect(heading).toHaveClass('relative', '-top-[7px]', 'leading-none')
    expect(link).toHaveClass('text-[20px]', 'font-bold', 'uppercase', 'text-white')
    expect(link).toHaveAttribute('href', '#top')
    expect(link.textContent).toBe('Topdeck')
  })
})
