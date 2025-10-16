export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-crumbl-light-pink">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
          {/* Quotation Mark */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-crumbl-pink rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl text-white">"</span>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center gap-2 mb-6 mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-8 h-8 fill-current text-crumbl-pink"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-center mb-6">
            <p className="text-2xl md:text-3xl font-body italic text-gray-800 leading-relaxed">
              Reviewed a few cookies, got my gift card two days later. I bought six boxes. No regrets.
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="text-center">
            <p className="text-lg text-gray-600 font-semibold">
              — Tyler S., Scottsdale, AZ
            </p>
          </div>

          {/* Decorative cookies */}
          <div className="absolute -bottom-4 -left-4 text-5xl transform -rotate-12">
            🍪
          </div>
          <div className="absolute -bottom-4 -right-4 text-5xl transform rotate-12">
            🍪
          </div>
        </div>
      </div>
    </section>
  )
}
