import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('shows the Our Story eyebrow and Who We Are heading', () => {
    render(<About />)

    expect(screen.getByText('Our Story')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Who We Are/ })).toBeInTheDocument()
  })

  it('shows the congregation story paragraphs and Learn More link', () => {
    render(<About />)

    expect(screen.getByText(/founded in 1985 with a simple mission/)).toBeInTheDocument()
    expect(
      screen.getByText(/people from all walks of life, united by our common faith/),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More About Us/ })).toBeInTheDocument()
  })

  it('shows the What We Believe list with four beliefs', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 3, name: /What We Believe/ })).toBeInTheDocument()

    for (const belief of ['The Bible', 'Jesus Christ', 'Salvation', 'Community']) {
      expect(screen.getByRole('heading', { level: 4, name: belief })).toBeInTheDocument()
    }
    expect(
      screen.getByText(/the Bible is God's inspired Word and our guide for faith and life/),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/salvation comes through faith in Jesus Christ alone/),
    ).toBeInTheDocument()
  })
})
