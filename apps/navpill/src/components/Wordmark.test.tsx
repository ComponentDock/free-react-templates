import { render, screen } from '@testing-library/react'
import { SITE_NAME } from '../lib/site'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders one 24px white wordmark as a heading-level link home', () => {
    render(<Wordmark />)

    const heading = screen.getByRole('heading', { level: 1 })
    const link = screen.getByRole('link', { name: SITE_NAME })

    expect(heading).toContainElement(link)
    expect(link).toHaveAttribute('href', '#top')
    expect(link.className.split(' ')).toEqual(
      expect.arrayContaining(['text-[24px]', 'text-white', 'font-medium']),
    )
  })
})
