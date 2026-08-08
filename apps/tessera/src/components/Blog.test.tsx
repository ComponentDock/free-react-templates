import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and three posts with meta and titles', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Recent Blog/ })).toBeInTheDocument()
    expect(screen.getAllByText('Jan. 20, 2019')).toHaveLength(3)
    expect(screen.getAllByText('Admin')).toHaveLength(3)
    expect(screen.getAllByText('3')).toHaveLength(3)
    expect(
      screen.getAllByRole('heading', { level: 3, name: /Even the all-powerful Pointing/ }),
    ).toHaveLength(3)
  })
})
