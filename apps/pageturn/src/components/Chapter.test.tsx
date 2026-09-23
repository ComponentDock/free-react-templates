import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Chapter } from './Chapter'

describe('Chapter', () => {
  it('renders heading and 8 chapter links', () => {
    render(<Chapter />)

    expect(screen.getByText("What's Inside The Book")).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Title page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Copyright' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Table of contents' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dedication' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Foreword' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Prologue' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Epilogue' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Epigraph' })).toBeInTheDocument()
  })

  it('shows default chapter content', () => {
    render(<Chapter />)

    expect(screen.getByText(/The title page is the very first page/)).toBeInTheDocument()
  })

  it('switches content when a chapter is clicked', async () => {
    const user = userEvent.setup()
    render(<Chapter />)

    await user.click(screen.getByRole('button', { name: 'Foreword' }))

    expect(screen.getByText(/The foreword is typically written by someone/)).toBeInTheDocument()
  })
})
