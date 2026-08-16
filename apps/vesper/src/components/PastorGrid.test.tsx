import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PastorGrid } from './PastorGrid'

describe('PastorGrid', () => {
  it('renders the heading and four pastor cards with roles and social links', () => {
    render(<PastorGrid />)

    expect(screen.getByRole('heading', { level: 2, name: 'Church Pastor' })).toBeInTheDocument()

    for (const [name, role] of [
      ['Lloyd Wilson', 'Senior Pastor'],
      ['Rachel Parker', 'Youth Pastor'],
      ['Ian Smith', 'Worship Leader'],
      ['Alicia Henderson', "Children's Ministry"],
    ] as const) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByText(role)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Facebook' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Instagram' }).length).toBeGreaterThanOrEqual(1)
  })
})
