import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ResumeSection } from './ResumeSection'
import { educationRows, experienceRows } from '../data'

describe('ResumeSection (Experience)', () => {
  it('renders the heading and four rows with roles, periods, companies, and blurbs', () => {
    render(<ResumeSection title="Experience" rows={experienceRows} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()

    experienceRows.forEach((row) => {
      const article = screen.getByRole('heading', { level: 3, name: row.role }).closest('article')!
      expect(within(article).getByText(new RegExp(row.period))).toBeInTheDocument()
      expect(within(article).getByText(new RegExp(row.company))).toBeInTheDocument()
      expect(
        within(article).getByRole('link', { name: `Details about ${row.role}` }),
      ).toBeInTheDocument()
      expect(within(article).getByText(row.blurb)).toBeInTheDocument()
      expect(article.className).toContain('border-t')
      expect(article.className).toContain('border-divider')
    })
    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
})

describe('ResumeSection (Education)', () => {
  it('renders the heading and two rows', () => {
    render(<ResumeSection title="Education" rows={educationRows} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Education' })).toBeInTheDocument()

    educationRows.forEach((row) => {
      expect(screen.getByRole('heading', { level: 3, name: row.role })).toBeInTheDocument()
      expect(screen.getByText(new RegExp(row.company))).toBeInTheDocument()
    })
    expect(screen.getAllByRole('article')).toHaveLength(2)
  })
})
