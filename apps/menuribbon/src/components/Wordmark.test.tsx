import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('is a blue, uppercase, 32px weight-900 mark at the far left that links home', () => {
    render(<Wordmark />)

    const link = screen.getByRole('link', { name: 'Menuribbon' })

    expect(link).toHaveAttribute('href', '#top')
    expect(link).toHaveClass('text-[2rem]', 'font-black', 'uppercase', 'text-accent')
    expect(screen.getByRole('heading', { level: 1 })).toContainElement(link)
  })
})
