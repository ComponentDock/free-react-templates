import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Work } from './Work'

describe('Work', () => {
  it('renders the heading and the four how-it-works steps', () => {
    render(<Work />)

    expect(screen.getByRole('heading', { name: 'How it work' })).toBeInTheDocument()

    for (const title of ['Unique Design', 'Data Analysis', 'Temparature Test', 'Show Progress']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
