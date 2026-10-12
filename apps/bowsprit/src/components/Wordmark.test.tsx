import { render, screen } from '@testing-library/react'
import { SITE_NAME } from '../lib/site'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the app’s own name at 32px, weight 800 and 0.2em tracking, in white, linked to the top', () => {
    render(<Wordmark />)

    const heading = screen.getByRole('heading', { level: 1 })
    const link = screen.getByRole('link', { name: SITE_NAME })

    expect(heading).toHaveClass('m-0', 'leading-none')
    expect(link).toHaveClass(
      'text-[32px]',
      'leading-[48px]',
      'font-extrabold',
      'tracking-[0.2em]',
      'py-[5px]',
      'mr-4',
      'uppercase',
      'text-white',
      'whitespace-nowrap',
    )
    expect(link).toHaveAttribute('href', '#top')
    expect(link.textContent).toBe('Bowsprit')
  })
})
