const CommunityStats = () => {
  return (
    <section className="py-10 px-6 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our Reading Community</h2>

          <p className="mt-3 text-base-content/70">
            Thousands of readers are already sharing books.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-primary">12K+</div>
              <div className="stat-title">Books Shared</div>
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-secondary">5K+</div>
              <div className="stat-title">Active Readers</div>
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-accent">2K+</div>
              <div className="stat-title">Daily Borrowings</div>
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat text-center">
              <div className="stat-value">99%</div>
              <div className="stat-title">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
