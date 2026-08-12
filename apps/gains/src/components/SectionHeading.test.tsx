import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders kicker, title, and copy', () => {
    render(
      <SectionHeading kicker="Awesome feature" title="Why you Join with us" copy="Body copy" />,
    )

    expect(screen.getByText('Awesome feature')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Why you Join with us' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Body copy')).toBeInTheDocument()
  })

  it('renders without kicker or copy', () => {
    render(<SectionHeading title="Only title" />)

    expect(screen.getByRole('heading', { level: 2, name: 'Only title' })).toBeInTheDocument()
  })
})
