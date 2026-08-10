import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostIconRow } from './PostIconRow'

describe('PostIconRow', () => {
  it('renders the comment, like and share items above a hairline', () => {
    render(<PostIconRow />)
    expect(screen.getByText('2 Comment')).toBeInTheDocument()
    expect(screen.getByText('0 Like')).toBeInTheDocument()
    expect(screen.getByText('Share')).toBeInTheDocument()
    expect(screen.getByRole('list').className).toContain('border-hairline')
  })
})
