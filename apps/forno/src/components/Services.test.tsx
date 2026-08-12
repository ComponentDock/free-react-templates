import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the four catering service cards', () => {
    render(<Services />)

    for (const title of [
      'Catering Services',
      'Birthday Party',
      'Business Meetings',
      'Wedding Party',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
})
