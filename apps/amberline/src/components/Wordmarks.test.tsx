import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmarks } from './Wordmarks'

describe('Wordmarks', () => {
  it('renders the heading and six text wordmarks', () => {
    render(<Wordmarks />)
    expect(screen.getByText('Our clients')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      "Companies We've Worked With",
    )
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(6)
    expect(items[0]).toHaveTextContent('Northgate')
    expect(items[5]).toHaveTextContent('Cobalt')
  })
})
