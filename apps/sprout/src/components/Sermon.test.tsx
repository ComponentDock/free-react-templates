import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sermon } from './Sermon'

describe('Sermon', () => {
  it('renders the featured sermon title, speaker, categories, and buttons', () => {
    render(<Sermon />)
    expect(screen.getByRole('heading', { name: /featured sermon/i })).toBeInTheDocument()
    expect(screen.getByText(/lord is sufficient/i)).toBeInTheDocument()
    expect(screen.getByText(/pastor james wilson/i)).toBeInTheDocument()
    expect(screen.getByText('Faith')).toBeInTheDocument()
    expect(screen.getByText('Grace')).toBeInTheDocument()
    expect(screen.getByText('Providence')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /watch sermons/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download sermons/i })).toBeInTheDocument()
  })
})
