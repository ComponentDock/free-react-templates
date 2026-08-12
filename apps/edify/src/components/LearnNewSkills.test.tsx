import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LearnNewSkills } from './LearnNewSkills'

describe('LearnNewSkills', () => {
  it('renders the heading, three bullet rows, and an accessible video play link', () => {
    render(<LearnNewSkills />)

    expect(
      screen.getByRole('heading', { name: 'Learn new skills online with top educators' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByRole('link', { name: /watch how learning works/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /educator/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
