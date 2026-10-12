import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('links home with the brand name as its accessible label', () => {
    render(<Wordmark />)

    const link = screen.getByRole('link', { name: 'Gridhost, back to the top' })
    expect(link).toHaveAttribute('href', '#home')
    expect(link).toHaveTextContent('Gridhost')
  })

  it('accepts layout classes from its host', () => {
    render(<Wordmark className="mb-[40px]" />)

    expect(screen.getByRole('link', { name: 'Gridhost, back to the top' })).toHaveClass('mb-[40px]')
  })
})
