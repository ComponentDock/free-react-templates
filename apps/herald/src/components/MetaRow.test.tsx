import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MetaRow } from './MetaRow'
import type { NewsMeta } from '../data'

describe('MetaRow', () => {
  const fullMeta: NewsMeta = {
    date: '24 May, 2018',
    author: 'By Alen Mark',
    comments: '15',
    views: '105',
  }

  it('renders date, author, comments and views when all are present', () => {
    render(<MetaRow meta={fullMeta} />)
    expect(screen.getByText(fullMeta.date)).toBeInTheDocument()
    expect(screen.getByText(fullMeta.author!)).toBeInTheDocument()
    expect(screen.getByText(fullMeta.comments!)).toBeInTheDocument()
    expect(screen.getByText(fullMeta.views)).toBeInTheDocument()
  })

  it('omits author and comments when absent', () => {
    const meta: NewsMeta = { date: '24 May, 2018', views: '105' }
    render(<MetaRow meta={meta} />)
    expect(screen.getByText(meta.date)).toBeInTheDocument()
    expect(screen.getByText(meta.views)).toBeInTheDocument()
    expect(screen.queryByText('By Alen Mark')).not.toBeInTheDocument()
    expect(screen.queryByText('15')).not.toBeInTheDocument()
  })

  it('applies a custom className to the list', () => {
    render(<MetaRow meta={fullMeta} className="text-white/80" />)
    expect(screen.getByRole('list')).toHaveClass('text-white/80')
  })
})
