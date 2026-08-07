import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and six feature cards', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'All the best features' }),
    ).toBeInTheDocument()

    for (const title of [
      'No1 in Sales!',
      'Online Marketing',
      'Modern Design',
      'Documented',
      'Easy to use',
      'Google Font',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
