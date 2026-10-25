import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Areas } from './Areas'
import { areasLead, towns } from '../data'

describe('Areas', () => {
  it('lists every covered town as plain text in one list', () => {
    render(<Areas />)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(16)
    expect(items.map((item) => item.textContent)).toEqual([...towns])
    expect(screen.getByRole('heading', { name: 'Where we work' })).toBeInTheDocument()
    expect(screen.getByText(areasLead)).toBeInTheDocument()
  })

  it('tells the visitor what to do when their town is missing', () => {
    render(<Areas />)

    expect(
      screen.getByText(
        'If your town is not listed, call and we will tell you honestly whether we cover it.',
      ),
    ).toBeInTheDocument()
  })
})
