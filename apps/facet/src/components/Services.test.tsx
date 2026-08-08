import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three feature cards with titles and blurbs', () => {
    render(<Services />)
    for (const title of ['Perfectly Design', 'Carefully Planned', 'Smartly Execute']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Read more/)).toHaveLength(3)
    expect(screen.getByText(/unorthographic life/)).toBeInTheDocument()
  })
})
