export default function Policies() {
  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-primary/10 p-8 md:p-16 border-b border-border">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">Policies</h1>
            <p className="text-lg text-muted-foreground">Simple Policy Rules for KJM Shop</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-16 space-y-8">
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">1. Return & Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Customers may return purchased items within 7 days of receipt in original condition. Refunds will be processed within 5-7 business days after inspection. Items must be unused and in their original packaging.
              </p>
            </section>

            <div className="border-t border-border"></div>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">2. Shipping Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer free shipping on orders over ₱500. Standard delivery takes 3-5 business days. Express shipping options are available for selected areas. All packages are insured against damage during transit.
              </p>
            </section>

            <div className="border-t border-border"></div>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">3. Payment Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We accept GCash, Maya, and Cash on Delivery (COD). All transactions are secure and encrypted. Payment must be completed before shipment of your order.
              </p>
            </section>

            <div className="border-t border-border"></div>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">4. Product Quality Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                All products sold on KJM Shop are verified for quality before listing. We guarantee authentic products from trusted sellers. If you receive a defective or counterfeit item, we will offer a full refund or replacement.
              </p>
            </section>

            <div className="border-t border-border"></div>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">5. Seller Verification Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                All sellers on KJM Shop are verified and must maintain a minimum rating of 4.0 stars. We monitor seller behavior to ensure customer satisfaction and fair trading practices.
              </p>
            </section>

            <div className="border-t border-border"></div>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">6. Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your personal information is protected and will never be shared with third parties without your consent. We use industry-standard security measures to protect your data.
              </p>
            </section>

            <div className="border-t border-border"></div>

            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">7. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                In case of disputes between buyers and sellers, KJM Shop's support team will mediate and find a fair solution. All disputes must be reported within 14 days of the transaction.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
