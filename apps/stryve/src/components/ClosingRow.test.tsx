import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClosingRow } from './ClosingRow'
import {
  classRows,
  classesHeading,
  membershipFigure,
  membershipHeading,
  membershipSuffix,
  signupCopy,
  signupCta,
  signupHeading,
} from '../data'

describe('ClosingRow', () => {
  it('renders the class list with six stopwatch rows', () => {
    render(<ClosingRow />)
    const section = screen.getByRole('region', { name: 'Classes and membership' })
    expect(screen.getByRole('heading', { level: 3, name: classesHeading })).toBeInTheDocument()
    expect(section.querySelectorAll('li')).toHaveLength(classRows.length)
    for (const row of classRows) {
      expect(screen.getAllByText(row.time)).toHaveLength(1)
    }
    expect(screen.getAllByText(classRows[0]!.name)).toHaveLength(2)
    expect(section.querySelectorAll('svg')).toHaveLength(classRows.length)
  })

  it('renders the membership and sign-up cards', () => {
    render(<ClosingRow />)
    expect(screen.getByRole('heading', { level: 3, name: membershipHeading })).toBeInTheDocument()
    expect(screen.getByText(membershipFigure, { exact: false })).toHaveTextContent(
      `${membershipFigure}${membershipSuffix}`,
    )
    expect(screen.getByRole('heading', { level: 3, name: signupHeading })).toBeInTheDocument()
    expect(screen.getByText(signupCopy)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: signupCta })).toHaveAttribute('href', '#contact')
  })
})
