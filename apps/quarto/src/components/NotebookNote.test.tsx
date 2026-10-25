import { render, screen } from '@testing-library/react'
import { NotebookNote } from './NotebookNote'
import { noteLines } from '../content'

describe('NotebookNote', () => {
  it('renders the two-part micro-label', () => {
    render(<NotebookNote />)

    expect(screen.getByText('FIELD NOTES')).toBeInTheDocument()
    expect(screen.getByText('VOL. 01 / 2026')).toBeInTheDocument()
  })

  it('renders the Georgia-italic question as a second-level heading', () => {
    render(<NotebookNote />)

    const heading = screen.getByRole('heading', { level: 2, name: /Always asking/ })
    expect(heading).toHaveTextContent('Always asking“what if?”')
    expect(heading).toHaveClass('font-serif', 'italic')
    expect(screen.getByRole('complementary', { name: 'A few things about me' })).toBeInTheDocument()
  })

  it('renders every ruled note line', () => {
    render(<NotebookNote />)

    for (const line of noteLines) {
      expect(screen.getByText(line)).toBeInTheDocument()
    }
  })

  it('renders the rubber stamp', () => {
    render(<NotebookNote />)

    expect(screen.getByText(/MADE WITH/)).toHaveTextContent('MADE WITHCURIOSITY✳')
  })
})
