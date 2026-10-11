import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section header and four trip leaders', () => {
    render(<Team />)

    expect(screen.getByText("We're Offering these Trip Packages")).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Intelligent Team Members' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(4)
  })

  it('keeps each name card below the photo, sliding up on hover', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 4, name: 'Randy Weaver' })).toBeInTheDocument()
    expect(screen.getByText('Senior Barrister at law')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Jane Cooper' })).toBeInTheDocument()

    const card = screen.getByTestId('team-outpost-team-1')
    expect(card).toHaveClass('group', 'overflow-hidden', 'border-hairline')

    const info = screen.getByRole('heading', { level: 4, name: 'Randy Weaver' }).parentElement
    expect(info).toHaveClass('bottom-[-120px]', 'group-hover:bottom-0', 'bg-white')

    expect(screen.getAllByRole('img')[0]).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/outpost-team-1/400/430',
    )
  })
})
