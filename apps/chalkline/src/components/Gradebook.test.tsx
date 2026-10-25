import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gradebook } from './Gradebook'
import { gradebook } from '../data'

describe('Gradebook', () => {
  it('names the course, cohort and the two chips', () => {
    render(<Gradebook />)

    expect(screen.getByText(gradebook.course)).toBeInTheDocument()
    expect(screen.getByText(gradebook.meta)).toBeInTheDocument()
    gradebook.chips.forEach((chip) => {
      expect(screen.getByText(chip)).toBeInTheDocument()
    })
  })

  it('carries six weighted columns plus the final column', () => {
    render(<Gradebook />)

    const headers = screen.getAllByRole('columnheader').map((node) => node.textContent)
    expect(headers[0]).toBe('Learner')
    expect(headers.slice(1, 7)).toEqual([
      'LAB-115% · /100',
      'LAB-215% · /100',
      'QUIZ10% · /100',
      'MID20% · /100',
      'PROJ20% · /100',
      'EXAM20% · /100',
    ])
    expect(headers[7]).toBe('Final')
  })

  it('renders seven learners with their group and weighted final', () => {
    render(<Gradebook />)

    const rows = screen.getAllByRole('row').slice(1)
    expect(rows).toHaveLength(7)
    expect(within(rows[0]!).getByText('Ines Halvorsen')).toBeInTheDocument()
    expect(within(rows[0]!).getByText('Group A')).toBeInTheDocument()
    expect(within(rows[0]!).getByText('87.0 · Distinction')).toBeInTheDocument()
    expect(within(rows[5]!).getByText('46.7 · At risk')).toBeInTheDocument()
    expect(within(rows[6]!).getByText('67.6 · Incomplete')).toBeInTheDocument()
  })

  it('shows a missing submission as an em dash, never a blank cell', () => {
    render(<Gradebook />)

    const row = screen.getByText('Hana Yoshida').closest('tr')!
    expect(within(row).getByText('—')).toBeInTheDocument()
  })

  it('colours a low score with the risk accent and a high one with the brand', () => {
    render(<Gradebook />)

    const dorian = screen.getByText('Dorian Ferreira').closest('tr')!
    expect(within(dorian).getByText('42')).toHaveClass('text-accent-600')

    const amara = screen.getByText('Amara Boateng').closest('tr')!
    expect(within(amara).getByText('95')).toHaveClass('text-primary-700')

    const callum = screen.getByText('Callum Reid').closest('tr')!
    expect(within(callum).getByText('61')).toHaveClass('text-gray-700')
  })

  it('states the three legend rules and the sideways-scroll hint', () => {
    render(<Gradebook />)

    gradebook.legend.forEach((rule) => {
      expect(screen.getByText(rule)).toBeInTheDocument()
    })
    expect(
      screen.getByText('Scroll the table sideways for the remaining assessments →'),
    ).toBeInTheDocument()
  })
})
