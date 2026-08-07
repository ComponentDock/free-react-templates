import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('shows three feature tiles with blurbs', () => {
    render(<Features />)

    for (const title of ['Automatic Backup Data', 'Page Builder', 'Create your own template']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(3)
  })
})
