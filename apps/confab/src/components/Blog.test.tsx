import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders three distinct article cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Latest Articles' })).toBeInTheDocument()

    expect(screen.getByText('The Grid System Is Not Dead')).toBeInTheDocument()
    expect(screen.getByText('Color Theory For Dark Interfaces')).toBeInTheDocument()
    expect(screen.getByText('Typography At 100 Pixels')).toBeInTheDocument()

    const readMoreLinks = screen.getAllByRole('link', { name: /Read More/ })
    expect(readMoreLinks).toHaveLength(3)
  })
})
