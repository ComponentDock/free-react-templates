import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PROJECTS } from '../content'
import { CaseStudyDialog } from './CaseStudyDialog'

const TRIAGE = PROJECTS[0]!
const CHANGE = PROJECTS[1]!

describe('CaseStudyDialog — case study', () => {
  it('opens as a named modal dialog focused on its close button', () => {
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog', { name: TRIAGE.name })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus()
  })

  it('renders the facts list, six sections, the flow and the decision', () => {
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={vi.fn()} />)

    TRIAGE.facts.forEach((fact) => {
      expect(screen.getAllByText(fact.label).length).toBeGreaterThan(0)
      expect(screen.getByText(fact.value)).toBeInTheDocument()
    })

    TRIAGE.sections.forEach((section) => {
      expect(screen.getByRole('heading', { level: 3, name: section.title })).toBeInTheDocument()
    })
    TRIAGE.flow.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument()
    })
    expect(screen.getByText(TRIAGE.decision)).toBeInTheDocument()
    expect(screen.getByText('The decision that mattered')).toBeInTheDocument()
  })

  it('renders the working demo with every sample record', () => {
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={vi.fn()} />)

    expect(screen.getByRole('heading', { level: 3, name: 'Working demo' })).toBeInTheDocument()
    expect(screen.getByText('8 of 8 shown')).toBeInTheDocument()
    TRIAGE.records.forEach((record) => {
      expect(screen.getByText(record.id)).toBeInTheDocument()
    })
    expect(screen.getByRole('columnheader', { name: 'Status' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Priority' })).toBeInTheDocument()
  })
})

describe('CaseStudyDialog — working demo', () => {
  it('focuses the search field when opened on the demo', () => {
    render(<CaseStudyDialog project={TRIAGE} mode="demo" onClose={vi.fn()} />)
    expect(screen.getByLabelText('Search')).toHaveFocus()
  })

  it('narrows the rows as the query is typed', async () => {
    const user = userEvent.setup()
    render(<CaseStudyDialog project={TRIAGE} mode="demo" onClose={vi.fn()} />)

    await user.type(screen.getByLabelText('Search'), 'keyboard')
    expect(screen.getByText('1 of 8 shown')).toBeInTheDocument()
    expect(screen.getByText('REQ-201')).toBeInTheDocument()
    expect(screen.queryByText('REQ-202')).toBeNull()
  })

  it('narrows the rows by category', async () => {
    const user = userEvent.setup()
    render(<CaseStudyDialog project={TRIAGE} mode="demo" onClose={vi.fn()} />)

    await user.selectOptions(screen.getByLabelText('Filter by status'), 'Done')
    expect(screen.getByText('3 of 8 shown')).toBeInTheDocument()
  })

  it('shows the authored empty state when nothing matches', async () => {
    const user = userEvent.setup()
    render(<CaseStudyDialog project={TRIAGE} mode="demo" onClose={vi.fn()} />)

    await user.type(screen.getByLabelText('Search'), 'zzz')
    expect(screen.getByText('0 of 8 shown')).toBeInTheDocument()
    expect(screen.getByText(TRIAGE.emptyState)).toBeInTheDocument()
  })

  it('clears both controls and returns focus to the search field', async () => {
    const user = userEvent.setup()
    render(<CaseStudyDialog project={TRIAGE} mode="demo" onClose={vi.fn()} />)

    await user.type(screen.getByLabelText('Search'), 'keyboard')
    await user.selectOptions(screen.getByLabelText('Filter by status'), 'Open')
    await user.click(screen.getByRole('button', { name: 'Clear filters' }))

    expect(screen.getByLabelText('Search')).toHaveValue('')
    expect(screen.getByLabelText('Filter by status')).toHaveValue('All')
    expect(screen.getByText('8 of 8 shown')).toBeInTheDocument()
    expect(screen.getByLabelText('Search')).toHaveFocus()
  })

  it('filters the second project too', async () => {
    const user = userEvent.setup()
    render(<CaseStudyDialog project={CHANGE} mode="demo" onClose={vi.fn()} />)

    expect(screen.getByText('5 of 5 shown')).toBeInTheDocument()
    await user.selectOptions(screen.getByLabelText('Filter by type'), 'Fix')
    expect(screen.getByText('2 of 5 shown')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Search'), 'v1.3.0')
    expect(screen.getByText('0 of 5 shown')).toBeInTheDocument()
    expect(screen.getByText(CHANGE.emptyState)).toBeInTheDocument()
  })
})

describe('CaseStudyDialog — dismissal', () => {
  it('closes on Escape', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes from the close button', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes from the backdrop', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close the project sheet' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('detaches the key listener on unmount', () => {
    const onClose = vi.fn()
    const { unmount } = render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={onClose} />)

    unmount()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).not.toHaveBeenCalled()
  })
})

describe('CaseStudyDialog — focus trap', () => {
  it('wraps Tab from the last control to the first', () => {
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog', { name: TRIAGE.name })
    const first = screen.getByRole('button', { name: 'Close' })
    const last = screen.getByRole('button', { name: 'Clear filters' })

    last.focus()
    fireEvent.keyDown(dialog, { key: 'Tab' })
    expect(first).toHaveFocus()
  })

  it('wraps Shift+Tab from the first control to the last', () => {
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog', { name: TRIAGE.name })
    const first = screen.getByRole('button', { name: 'Close' })
    const last = screen.getByRole('button', { name: 'Clear filters' })

    first.focus()
    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true })
    expect(last).toHaveFocus()
  })

  it('leaves a Tab in the middle of the sheet to the browser', () => {
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog', { name: TRIAGE.name })
    const search = screen.getByLabelText('Search')

    search.focus()
    fireEvent.keyDown(dialog, { key: 'Tab' })
    expect(search).toHaveFocus()
  })

  it('leaves a Shift+Tab in the middle of the sheet to the browser', () => {
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog', { name: TRIAGE.name })
    const search = screen.getByLabelText('Search')

    search.focus()
    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true })
    expect(search).toHaveFocus()
  })

  it('ignores keys that are not Tab', () => {
    render(<CaseStudyDialog project={TRIAGE} mode="case" onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog', { name: TRIAGE.name })
    const first = screen.getByRole('button', { name: 'Close' })

    first.focus()
    fireEvent.keyDown(dialog, { key: 'ArrowDown' })
    expect(first).toHaveFocus()
  })
})
