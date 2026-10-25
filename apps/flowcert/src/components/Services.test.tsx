import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Areas } from './Areas'
import { Services } from './Services'
import { towns } from '../data'

describe('Services', () => {
  it('renders six service cells in the reference order', () => {
    render(<Services />)

    const list = screen.getByRole('list', { name: 'Services' })
    const titles = Array.from(list.querySelectorAll('h3')).map((heading) => heading.textContent)

    expect(titles).toEqual([
      'Annual certification testing',
      'Repairs and rebuild kits',
      'Device replacement',
      'New installation certification',
      'Property portfolios',
      'Annual reminders',
    ])
  })

  it('prices the annual reminder with the word Free rather than $0', () => {
    render(<Services />)

    const reminder = screen.getByText('Annual reminders').closest('li')
    expect(reminder?.querySelector('p:last-child')).toHaveTextContent(/^Free$/)
  })

  it('renders the sample-content footnote below the block', () => {
    render(<Services />)

    expect(screen.getByText(/Sample content for demonstration/)).toBeInTheDocument()
  })
})

describe('Areas', () => {
  it('lists the twelve towns as plain text in reference order', () => {
    const { container } = render(<Areas />)

    const items = Array.from(container.querySelectorAll('ul li'))
    expect(items.map((item) => item.textContent)).toEqual([...towns])
    expect(items).toHaveLength(12)
    expect(container.querySelectorAll('ul a')).toHaveLength(0)
  })

  it('separates towns with a bottom hairline and carries the replace-the-list note', () => {
    const { container } = render(<Areas />)

    expect(container.querySelector('ul li')).toHaveClass('border-b', 'border-ink-100')
    expect(screen.getByText(/Replace this list with your own towns/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Where we work' })).toBeInTheDocument()
  })
})
