import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the About Us heading, blurb, and news cards', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: /About Us/ })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { level: 3, name: /Far far away behind the word mountains/ }),
    ).toHaveLength(3)
    expect(screen.getByRole('img', { name: /Launch about preview/ })).toBeInTheDocument()
  })
})
