import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'
import { timeline } from '../content'

describe('Experience', () => {
  it('renders the counted eyebrow and the heading with its italic tail', () => {
    render(<Experience />)

    expect(screen.getByText('03 / ALONG THE WAY')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Inside &outside class.')
    expect(screen.getByText('outside class.')).toHaveClass('italic')
  })

  it('renders the three ledger rows in order with their dates and titles', () => {
    render(<Experience />)

    const rows = screen.getAllByRole('listitem')
    expect(rows).toHaveLength(3)
    const expected = timeline.map((row) => `${row.date}${row.title}${row.body}`)
    expect(rows.map((row) => row.textContent)).toEqual(expected)
  })

  it('keeps the out-of-scope résumé destination as a non-navigating control', () => {
    render(<Experience />)

    const button = screen.getByRole('button', { name: /Read my full résumé/ })
    expect(button).toHaveAttribute('type', 'button')
  })
})
