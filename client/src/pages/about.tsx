export default function About() {
  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-16 border-b border-gray-100">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">About KJM Shop</h1>
            <p className="text-lg text-gray-600">Learn more about our mission to serve the Philippines</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-16 space-y-8">
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Our Company</h2>
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                KJM Shop is a premier online shopping platform based in the Philippines, dedicated to connecting local sellers with consumers seeking quality products. Our marketplace serves as a digital bridge between traditional Filipino commerce and modern e-commerce convenience.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                Founded and owned by <span className="font-semibold text-primary">Mary Jane Maltos</span>, KJM Shop has established itself as a trusted destination for shoppers seeking authentic, locally-sourced products with the reliability of a modern digital marketplace.
              </p>
            </section>

            <div className="border-t border-gray-200"></div>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-base">
                To empower local businesses and entrepreneurs throughout the Philippines by providing a secure, accessible, and user-friendly platform that facilitates commerce while maintaining the highest standards of quality and customer service.
              </p>
            </section>

            <div className="border-t border-gray-200"></div>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Trust & Integrity</h3>
                  <p className="text-gray-600">We prioritize transparency and honesty in every transaction, ensuring our customers and sellers can conduct business with confidence.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Community First</h3>
                  <p className="text-gray-600">Supporting local entrepreneurs and sellers is at the heart of everything we do. We celebrate Filipino craftsmanship and enterprise.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Quality Excellence</h3>
                  <p className="text-gray-600">We maintain rigorous standards to ensure that every product on our platform meets our commitment to quality.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Innovation</h3>
                  <p className="text-gray-600">We continuously improve our platform to provide the best shopping experience for our customers.</p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200"></div>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Contact Us</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <p className="text-gray-700 mb-3">
                  Have questions? We're here to help. Reach out to our customer service team.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-semibold">Email:</span> support@kjmshop.ph</li>
                  <li><span className="font-semibold">Phone:</span> 1-800-KJM-SHOP</li>
                  <li><span className="font-semibold">Hours:</span> Monday - Sunday, 8 AM - 8 PM PST</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
