export function MapSection() {
  return (
    <section className="bg-dark-bg" id="venue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-[600px] w-full overflow-hidden rounded-none bg-gray-800">
          <iframe
            title="Event venue map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959595000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            sandbox="allow-scripts allow-same-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
