import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sermon } from './Sermon'
import { sermon } from '../data'

describe('Sermon', () => {
  it('renders the kicker, heading, title, and sermon info', () => {
    render(<Sermon />)
    expect(screen.getByText(sermon.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: sermon.heading })).toBeInTheDocument()
    expect(screen.getByText(sermon.title)).toBeInTheDocument()
    sermon.info.forEach((item) => {
      expect(screen.getByText(item.value)).toBeInTheDocument()
    })
  })

  it('renders the sermon paragraphs and download links', () => {
    render(<Sermon />)
    sermon.paragraphs.forEach((p) => {
      expect(screen.getByText(p)).toBeInTheDocument()
    })
    expect(screen.getByLabelText('Link')).toBeInTheDocument()
    expect(screen.getByLabelText('Archive')).toBeInTheDocument()
    expect(screen.getByLabelText('Listen')).toBeInTheDocument()
    expect(screen.getByLabelText('Download')).toBeInTheDocument()
  })
})
