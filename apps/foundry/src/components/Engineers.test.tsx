import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Engineers } from './Engineers'

describe('Engineers', () => {
  it('renders the heading and both engineers', () => {
    render(<Engineers />)

    expect(screen.getByRole('heading', { name: /Our Engineers/ })).toBeInTheDocument()
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(2)
    expect(within(articles[0]!).getByRole('heading', { name: 'John Miller' })).toBeInTheDocument()
    expect(within(articles[1]!).getByRole('heading', { name: 'Brian Smith' })).toBeInTheDocument()
  })
})
