import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Chapter } from './Chapter'
import { describe, it, expect } from 'vitest'

describe('Chapter', () => {
  it('renders the heading', () => {
    render(<Chapter />)
    expect(screen.getByText("What's Inside The Book")).toBeInTheDocument()
  })

  it('renders all chapter navigation links', () => {
    render(<Chapter />)
    for (const label of [
      'Title page',
      'Copyright',
      'Table of contents',
      'Dedication',
      'Foreword',
      'Prologue',
      'Epilogue',
      'Epigraph',
    ]) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('shows default chapter content', () => {
    render(<Chapter />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Title Page')
  })

  it('switches chapter on click', async () => {
    const user = userEvent.setup()
    render(<Chapter />)
    await user.click(screen.getAllByText('Copyright')[0]!)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Copyright')
  })
})
