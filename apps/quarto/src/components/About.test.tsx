import { render, screen } from '@testing-library/react'
import { About } from './About'
import { aboutParagraphs, skills } from '../content'

describe('About', () => {
  it('renders the counted eyebrow and the heading with its italic tail', () => {
    render(<About />)

    expect(screen.getByText('02 / A LITTLE CONTEXT')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Learning bymaking things.')
    expect(screen.getByText('making things.')).toHaveClass('italic')
  })

  it('renders both paragraphs', () => {
    render(<About />)

    for (const paragraph of aboutParagraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
  })

  it('renders five skill chips in a labelled list', () => {
    render(<About />)

    const list = screen.getByRole('list', { name: 'Skills and tools' })
    expect(list.querySelectorAll('li')).toHaveLength(5)
    for (const skill of skills) {
      expect(screen.getByText(skill)).toBeInTheDocument()
    }
  })
})
