import { describe, expect, it } from 'vitest'
import { INITIAL, MESSAGES } from '../data'
import { inboxReducer, initialInbox, unreadCount, type InboxAction } from './inbox'

const run = (actions: InboxAction[]) => actions.reduce(inboxReducer, initialInbox(INITIAL))

describe('unreadCount', () => {
  it('counts the cards, not a stored number', () => {
    expect(unreadCount(initialInbox(INITIAL))).toBe(3)
    expect(unreadCount(run([{ type: 'allRead' }]))).toBe(0)
  })
})

describe('inboxReducer', () => {
  it('starts with four cards, an empty status line and no undo', () => {
    const state = initialInbox(INITIAL)

    expect(state.items).toHaveLength(4)
    expect(state.leaving).toEqual([])
    expect(state.message).toBe('')
    expect(state.undo).toBeNull()
  })

  it('toggles one card to read and back, announcing each direction', () => {
    const read = run([{ type: 'toggle', id: 'mara' }])

    expect(read.items[0]?.read).toBe(true)
    expect(read.message).toBe(MESSAGES.read)
    expect(read.undo).toBeNull()

    const back = inboxReducer(read, { type: 'toggle', id: 'mara' })
    expect(back.items[0]?.read).toBe(false)
    expect(back.message).toBe(MESSAGES.unread)
  })

  it('toggles the read card back to unread', () => {
    const state = run([{ type: 'toggle', id: 'invoice' }])

    expect(state.items[3]?.read).toBe(false)
    expect(state.message).toBe(MESSAGES.unread)
    expect(unreadCount(state)).toBe(4)
  })

  it('leaves the state untouched for an unknown id', () => {
    const state = initialInbox(INITIAL)

    expect(inboxReducer(state, { type: 'toggle', id: 'nope' })).toBe(state)
  })

  it('marks every card read in one gesture', () => {
    const state = run([{ type: 'toggle', id: 'invoice' }, { type: 'allRead' }])

    expect(state.items.every((item) => item.read)).toBe(true)
    expect(state.message).toBe(MESSAGES.allRead)
    expect(state.undo).toBeNull()
  })

  it('keeps an archived card in the list while it leaves, then drops it', () => {
    const leaving = run([{ type: 'beginArchive', id: 'deploy' }])

    expect(leaving.items).toHaveLength(4)
    expect(leaving.leaving).toEqual(['deploy'])
    expect(leaving.message).toBe('')

    const committed = inboxReducer(leaving, { type: 'commitArchive', id: 'deploy' })
    expect(committed.items.map((item) => item.id)).toEqual(['mara', 'diego', 'invoice'])
    expect(committed.leaving).toEqual([])
    expect(committed.message).toBe(MESSAGES.archived)
    expect(committed.undo).toEqual({ item: INITIAL[1], index: 1 })
  })

  it('ignores a commit for a card that is already gone but clears its leave flag', () => {
    const leaving = run([{ type: 'beginArchive', id: 'deploy' }])
    const gone = inboxReducer(leaving, { type: 'commitArchive', id: 'deploy' })
    const again = inboxReducer(
      { ...gone, leaving: ['deploy'] },
      { type: 'commitArchive', id: 'deploy' },
    )

    expect(again.items).toHaveLength(3)
    expect(again.leaving).toEqual([])
    expect(again.message).toBe(MESSAGES.archived)
    expect(again.undo).toEqual(gone.undo)
  })

  it('restores the archived card at its original index, read state intact', () => {
    const archived = run([
      { type: 'toggle', id: 'deploy' },
      { type: 'beginArchive', id: 'deploy' },
      { type: 'commitArchive', id: 'deploy' },
    ])
    expect(archived.items.map((item) => item.id)).toEqual(['mara', 'diego', 'invoice'])

    const restored = inboxReducer(archived, { type: 'undo' })
    expect(restored.items.map((item) => item.id)).toEqual(['mara', 'deploy', 'diego', 'invoice'])
    expect(restored.items[1]?.read).toBe(true)
    expect(restored.message).toBe(MESSAGES.restored)
    expect(restored.undo).toBeNull()
  })

  it('is a no-op when there is nothing to undo', () => {
    const state = initialInbox(INITIAL)

    expect(inboxReducer(state, { type: 'undo' })).toBe(state)
  })

  it('holds one undo slot: a second archive replaces the first', () => {
    const state = run([
      { type: 'beginArchive', id: 'mara' },
      { type: 'commitArchive', id: 'mara' },
      { type: 'beginArchive', id: 'diego' },
      { type: 'commitArchive', id: 'diego' },
    ])

    expect(state.undo?.item.id).toBe('diego')

    const undone = inboxReducer(state, { type: 'undo' })
    expect(undone.items.map((item) => item.id)).toEqual(['deploy', 'diego', 'invoice'])
  })

  it('archiving the first card leaves the rest in order', () => {
    const state = run([
      { type: 'beginArchive', id: 'mara' },
      { type: 'commitArchive', id: 'mara' },
    ])

    expect(state.items.map((item) => item.id)).toEqual(['deploy', 'diego', 'invoice'])
    expect(state.undo).toEqual({ item: INITIAL[0], index: 0 })
  })
})
