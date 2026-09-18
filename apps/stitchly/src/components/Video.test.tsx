import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('displays the play button link', () => {
    render(<Video />)
    expect(
      screen.getByRole('link', { name: /Watch our tailor story on YouTube/i }),
    ).toHaveAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  })
})
