import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Deliverables } from '../components/Deliverables'
import { Disciplines } from '../components/Disciplines'
import { Process } from '../components/Process'
import { Work } from '../components/Work'
import { deliverables, disciplines, process, work } from '../content'

describe('Work', () => {
  it('frames the band and stacks three brief/approach/outcome studies', () => {
    const { container } = render(<Work />)

    expect(container.querySelector('#work')).toBeInTheDocument()
    expect(screen.getByText('Selected work')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Three projects, start to finish' }),
    ).toBeInTheDocument()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)

    for (const [index, item] of work.cases.entries()) {
      const article = articles[index]!
      expect(within(article).getByText(item.company)).toBeInTheDocument()
      expect(
        within(article).getByRole('heading', { level: 3, name: item.title }),
      ).toBeInTheDocument()
      expect(within(article).getByText(`${item.discipline} · ${item.year}`)).toBeInTheDocument()
      expect(within(article).getByText(item.metric)).toBeInTheDocument()
      expect(within(article).getByText(item.metricCaption)).toBeInTheDocument()
      expect(within(article).getByText('Brief')).toBeInTheDocument()
      expect(within(article).getByText('Approach')).toBeInTheDocument()
      expect(within(article).getByText('Outcome')).toBeInTheDocument()
      expect(within(article).getByRole('img', { name: item.imageAlt })).toHaveAttribute(
        'src',
        item.image,
      )
    }

    expect(screen.getByText('2 colours')).toBeInTheDocument()
    expect(screen.getByText('6 issues')).toBeInTheDocument()
    expect(screen.getByText('60 pp')).toBeInTheDocument()
  })

  it('reverses the figure on the middle study only', () => {
    render(<Work />)
    const articles = screen.getAllByRole('article')

    expect(articles[0]!.querySelector('figure')).not.toHaveClass('lg:order-2')
    expect(articles[1]!.querySelector('figure')).toHaveClass('lg:order-2')
    expect(articles[2]!.querySelector('figure')).not.toHaveClass('lg:order-2')
  })
})

describe('Disciplines', () => {
  it('is the dark band, with an inverted chip and four priced rows', () => {
    const { container } = render(<Disciplines />)

    const band = container.querySelector('#disciplines')!
    expect(band).toHaveClass('bg-primary-900', 'text-primary-50')
    expect(screen.getByText('What we do')).toHaveClass('bg-accent-400', 'text-primary-900')
    expect(screen.getByText(/not a full-service agency/)).toBeInTheDocument()

    const rows = screen.getAllByTestId('discipline-row')
    expect(rows).toHaveLength(4)

    for (const [index, item] of disciplines.items.entries()) {
      const row = rows[index]!
      expect(within(row).getByRole('heading', { level: 3, name: item.title })).toHaveClass(
        'group-hover:text-accent-400',
      )
      expect(within(row).getByText(item.price)).toHaveClass('text-accent-400', 'font-mono')
      expect(within(row).getByText(item.body)).toBeInTheDocument()
      for (const tag of item.tags) {
        expect(within(row).getByText(tag)).toBeInTheDocument()
      }
    }
  })
})

describe('Process', () => {
  it('runs four fixed stages on a hairline grid, then three footnotes', () => {
    const { container } = render(<Process />)

    expect(container.querySelector('#process')).toBeInTheDocument()
    const list = container.querySelector('ol')!
    expect(list).toHaveClass('gap-px', 'bg-primary-200')

    const cells = within(list).getAllByRole('listitem')
    expect(cells).toHaveLength(4)

    for (const [index, stage] of process.stages.entries()) {
      const cell = cells[index]!
      expect(within(cell).getByText(stage.numeral)).toHaveClass('text-accent-500', 'font-mono')
      expect(within(cell).getByText(stage.duration)).toBeInTheDocument()
      expect(within(cell).getByRole('heading', { level: 3, name: stage.title })).toBeInTheDocument()
      expect(within(cell).getByText(stage.body)).toBeInTheDocument()
      expect(within(cell).getByText(process.youGet)).toBeInTheDocument()
      expect(within(cell).getByText(stage.deliverable)).toBeInTheDocument()
    }

    for (const note of process.footnotes) {
      expect(screen.getByText(note)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('.bg-accent-500')).toHaveLength(3)
  })
})

describe('Deliverables', () => {
  it('publishes three columns, twelve rows and the licences note', () => {
    const { container } = render(<Deliverables />)

    expect(container.querySelector('#deliverables')).toHaveClass('bg-primary-50')
    expect(screen.getByText('What you actually receive')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Artwork',
      'Specification',
      'Working files',
    ])

    const rows = container.querySelectorAll('dt')
    expect(rows).toHaveLength(12)
    expect(screen.getByText('AI · EPS · SVG · PDF')).toBeInTheDocument()
    expect(screen.getByText('Pantone, CMYK, RGB and HEX with tolerances')).toBeInTheDocument()
    expect(screen.getByText(deliverables.note)).toHaveClass('border-l-4', 'border-accent-400')
  })

  it('keeps the seven unannotated rows free of a note line', () => {
    render(<Deliverables />)
    const annotated = deliverables.columns.flatMap((column) =>
      column.rows.filter((row) => row.note),
    )
    expect(annotated).toHaveLength(5)

    const rows = screen.getAllByTestId('deliverable-row')
    expect(rows).toHaveLength(12)
    const withNotes = rows.filter((row) => row.querySelector('p') !== null)
    expect(withNotes).toHaveLength(5)
  })
})
