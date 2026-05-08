const Newsletter = () => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto bg-base-200 rounded-3xl p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Join Our Newsletter</h2>

          <p className="mt-3 text-base-content/70">
            Get updates about new books, reading trends, and community events.
          </p>

          {/* Input Section */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:w-80"
            />

            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
