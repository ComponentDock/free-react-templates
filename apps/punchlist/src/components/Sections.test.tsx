import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AREAS, COUNTERS, COUNTERS_NOTE, RATES, WORK } from '../content'
import { Areas } from './Areas'
import { Credentials } from './Credentials'
import { Rates } from './Rates'
import { StatsStrip } from './StatsStrip'
import { Work } from './Work'

describe('StatsStrip', () => {
  it('shows all four authored figures and the sample-data note', () => {
    render(<StatsStrip />)
    COUNTERS.forEach((figure) => {
      expect(screen.getByText(figure.value)).toBeInTheDocument()
      expect(screen.getByText(figure.label)).toBeInTheDocument()
    })
    expect(screen.getByText(COUNTERS_NOTE)).toBeInTheDocument()
  })
})

describe('Rates', () => {
  it('prints eight jobs with a from price and a typical range', () => {
    render(<Rates />)
    expect(screen.getAllByRole('row')).toHaveLength(RATES.length + 1)
    RATES.forEach((rate) => {
      expect(screen.getByRole('rowheader', { name: new RegExp(rate.job) })).toBeInTheDocument()
      expect(screen.getByText(rate.covers)).toBeInTheDocument()
      expect(screen.getByText(rate.from)).toBeInTheDocument()
      expect(screen.getByText(rate.typical)).toBeInTheDocument()
    })
  })

  it('names all four columns and badges exactly two rows', () => {
    render(<Rates />)
    for (const label of ['Job', 'What that covers', 'From', 'Typical']) {
      expect(screen.getByRole('columnheader', { name: label })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Most booked')).toHaveLength(2)
    expect(screen.getByText(/Every job starts with a £45 call-out/)).toBeInTheDocument()
  })
})

describe('Work', () => {
  it('renders three case studies with area, time and cost', () => {
    render(<Work />)
    WORK.forEach((job) => {
      expect(screen.getByRole('heading', { level: 3, name: job.title })).toBeInTheDocument()
      expect(screen.getByText(job.blurb)).toBeInTheDocument()
      expect(screen.getByText(job.area)).toBeInTheDocument()
      expect(screen.getByText(job.time)).toBeInTheDocument()
      expect(screen.getByText(job.cost)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `${job.title} in ${job.area}` })).toBeInTheDocument()
    })
    expect(screen.queryAllByRole('link')).toHaveLength(0)
  })
})

describe('Areas', () => {
  it('lists six coverage areas with postcodes and travel notes', () => {
    render(<Areas />)
    AREAS.forEach((area) => {
      expect(screen.getByRole('heading', { level: 3, name: area.name })).toBeInTheDocument()
      expect(screen.getByText(area.postcodes)).toBeInTheDocument()
      if (area.note !== undefined) {
        expect(screen.getByText(area.note)).toBeInTheDocument()
      }
    })
    expect(screen.getByText(/we do not run a 24-hour emergency service/i)).toBeInTheDocument()
    expect(screen.getAllByText('Next day')).toHaveLength(2)
  })
})

describe('Credentials', () => {
  it('renders four documents with invented references', () => {
    render(<Credentials />)
    for (const reference of [
      'Policy AVL-8820417',
      'NICEIC reg. 6603942',
      'Renewed annually',
      'In writing, on every invoice',
    ]) {
      expect(screen.getByText(reference)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
  })
})
