import { Search } from 'lucide-react'
import {
  DESTINATIONS,
  FIELD_LABELS,
  FORM_ID,
  GUESTS,
  STATUS_ID,
  SUBMIT_LABEL,
  WHERE_PLACEHOLDER,
} from '../data/site'
import { useStaySearch } from '../hooks/useStaySearch'

/**
 * The five-column booking panel that rides up over the photograph's foot by
 * 64 px. `noValidate` is deliberate: the reference lets the browser block a
 * submit and then leaves its previous sentence on screen, so the panel
 * validates on its own and always describes the attempt that just happened.
 */
export function SearchPanel() {
  const search = useStaySearch()

  return (
    <form
      id={FORM_ID}
      className="lk-search"
      aria-label="Search stays"
      noValidate
      onSubmit={search.onSubmit}
    >
      <div className="lk-field lk-field--where">
        <label className="lk-label" htmlFor="lk-where">
          {FIELD_LABELS.where}
        </label>
        <input
          className="lk-input"
          id="lk-where"
          name="where"
          type="text"
          list="lk-places"
          placeholder={WHERE_PLACEHOLDER}
          autoComplete="off"
          required
          value={search.where}
          onChange={search.onWhereChange}
        />
        <datalist id="lk-places">
          {DESTINATIONS.map((place) => (
            <option key={place.name} value={place.name} />
          ))}
        </datalist>
      </div>

      <div className="lk-field">
        <label className="lk-label" htmlFor="lk-in">
          {FIELD_LABELS.checkIn}
        </label>
        <input
          className="lk-input"
          id="lk-in"
          name="checkin"
          type="date"
          min={search.today}
          required
          value={search.checkIn}
          onChange={search.onCheckInChange}
        />
      </div>

      <div className="lk-field">
        <label className="lk-label" htmlFor="lk-out">
          {FIELD_LABELS.checkOut}
        </label>
        <input
          className="lk-input"
          id="lk-out"
          name="checkout"
          type="date"
          min={search.earliestCheckOut}
          required
          value={search.checkOut}
          onChange={search.onCheckOutChange}
        />
      </div>

      <div className="lk-field lk-field--guests">
        <label className="lk-label" htmlFor="lk-guests">
          {FIELD_LABELS.guests}
        </label>
        <select
          className="lk-input lk-select"
          id="lk-guests"
          name="guests"
          value={search.guest}
          onChange={search.onGuestChange}
        >
          {GUESTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button className="lk-submit" type="submit">
        <Search size={20} aria-hidden="true" focusable="false" />
        {SUBMIT_LABEL}
      </button>

      <p className="lk-status" id={STATUS_ID} role="status">
        {search.message}
      </p>
    </form>
  )
}
