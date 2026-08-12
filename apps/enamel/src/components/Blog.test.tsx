import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and three distinct posts with date boxes and read-more links', () => {
    render(<Blog />)

    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()

    for (const title of [
      'Scary Thing That You Don’t Get Enough Sleep',
      'Five Foods That Naturally Whiten Your Teeth',
      'Braces at Any Age: Why Adults Are Smiling More',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    for (const day of ['18', '22', '03']) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
    expect(screen.getAllByText('September')).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
