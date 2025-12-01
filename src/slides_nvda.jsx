// slides_nvda.jsx
import React from 'react';

export const slides = [
  // SLIDE 1 – Engine overview (raw → clean dataset)
  {
    id: 1,
    maxStep: 3,
    render(step) {
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              NVDA ENGINE
            </div>
            <div className="slide-progress-pill">1 · Data foundation</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">From raw files to one NVDA view</div>
            <div className="slide-subtitle">
              Income, balance sheet, cash flow, and derived metrics
              lock into a single clean dataset.
            </div>
          </div>

          <div className="slide-grid">
            {/* Raw files card */}
            <div
              className={`card ${
                step >= 1 ? 'layer-rise card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Inputs</div>
                <span className="card-tag card-tag-neutral">2018–2024</span>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  <strong>PL</strong> Income
                </span>
                <span className="metric-chip">
                  <strong>BS</strong> Balance sheet
                </span>
                <span className="metric-chip">
                  <strong>CF</strong> Cash flow
                </span>
                <span className="metric-chip">
                  <strong>DRV</strong> Ratios &amp; extras
                </span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Multiple raw statement files with mismatched labels and formats.
                </div>
              </div>
            </div>

            {/* Funnel / merge card */}
            <div
              className={`card ${
                step >= 1 ? 'layer-swipe' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Engine</div>
                <span className="card-tag">Clean &amp; merge</span>
              </div>
              <div className="metric-row">
                <span className="metric-chip">Standardize names</span>
                <span className="metric-chip">Align years</span>
                <span className="metric-chip">Stack all sources</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Macro reads every file and outputs one long, tidy NVDA table.
                </div>
              </div>
            </div>

            {/* Output dataset card */}
            <div
              className={`card ${
                step >= 2 ? 'layer-swipe-right card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Output</div>
                <span className="card-tag">Unified dataset</span>
              </div>
              <div className="big-number">$ · t</div>
              <div className="big-number-sub">
                One row per year, all key metrics ready for ratios &amp; graphs.
              </div>
              <div className="chart-shell">
                <div className="caption">
                  This is the base for every ratio, projection, and valuation slide.
                </div>
              </div>
            </div>

            {/* Interactive prompt */}
            <div
              className={`card ${
                step >= 3 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">You</div>
                <span className="card-tag-neutral">Think</span>
              </div>
              <div className="question-card">
                <div className="question-main">
                  If this first step is wrong,
                  every chart that follows is…
                </div>
                <div className="pill-row">
                  <span className="pill-option">Misleading</span>
                  <span className="pill-option">Overconfident</span>
                  <span className="pill-option">Useless</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 2 – Pipeline overview
  {
    id: 2,
    maxStep: 5,
    render(step) {
      const stages = [
        ['Files', 'PL · BS · CF · DRV'],
        ['Unified table', 'One NVDA dataset'],
        ['Ratios', 'Health signals'],
        ['Projections', '2025–2030'],
        ['Outputs', 'Charts & grade'],
      ];
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              PIPELINE
            </div>
            <div className="slide-progress-pill">2 · End-to-end flow</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">How the NVDA engine runs</div>
            <div className="slide-subtitle">
              One pass: read, clean, merge, score, project, visualize.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? 'layer-rise' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Flow</div>
                <span className="card-tag-neutral">Structured</span>
              </div>
              <div className="heatmap-strip">
                {stages.map((_, i) => (
                  <div
                    key={i}
                    className={`heat-cell ${
                      step >= i + 2 ? 'heat-cell-strong' : ''
                    }`}
                  />
                ))}
              </div>
              <div className="heat-label-row">
                <span>Files</span>
                <span>Table</span>
                <span>Ratios</span>
                <span>Proj</span>
                <span>Out</span>
              </div>
              <div className="caption">
                Each stage prepares the next, with no manual tweaks in between.
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-swipe' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Inputs → Ratios</div>
                <span className="card-tag">Transform</span>
              </div>
              <div className="metric-row">
                <span className="metric-chip">Revenue</span>
                <span className="metric-chip">Net income</span>
                <span className="metric-chip">Assets / Debt</span>
                <span className="metric-chip">Cash flow</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Raw statements become profitability, liquidity, leverage, and efficiency.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Ratios → Scores</div>
                <span className="card-tag">Signal</span>
              </div>
              <div className="pill-stat-row">
                <span className="pill-stat pill-stat-positive">
                  Strong margins
                </span>
                <span className="pill-stat pill-stat-positive">
                  Low leverage
                </span>
                <span className="pill-stat pill-stat-positive">
                  Cash &gt; profit
                </span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Rules combine into a single Health Score and grade.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 4 ? 'layer-float card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Scores → Forecasts</div>
                <span className="card-tag">Forward view</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Average growth and margins drive a 2025–2030 projection loop.
                </div>
              </div>
              <div className="bottom-rail">
                <div className="bottom-rail-left">
                  <div className="bottom-rail-dot" />
                  <span>Engine ready for new years of data.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 3 – Metric cleaning (Before / After)
  {
    id: 3,
    maxStep: 4,
    render(step) {
      const before = [
        'Total Revenue',
        'Sales & Services Revenue',
        'TotalRevenue',
        'Net Income (Loss)',
        'NetIncomeLoss',
      ];
      const after = ['Revenue', 'Revenue', 'Revenue', 'NetIncome', 'NetIncome'];
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              CLEANING
            </div>
            <div className="slide-progress-pill">3 · Standardizing metrics</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">Making the labels speak clearly</div>
            <div className="slide-subtitle">
              Different names collapse into a consistent NVDA schema.
            </div>
          </div>

          <div className="slide-grid">
            {/* Before */}
            <div
              className={`card ${
                step >= 1 ? 'layer-rise' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Before</div>
                <span className="card-tag-neutral">Messy</span>
              </div>
              <div className="metric-row">
                {before.map((b) => (
                  <span key={b} className="metric-chip">
                    {b}
                  </span>
                ))}
              </div>
              <div className="caption">
                Multiple labels for the same concept create silent errors.
              </div>
            </div>

            {/* Transform core */}
            <div
              className={`card ${
                step >= 2 ? 'layer-float card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Transform</div>
                <span className="card-tag">Normalization</span>
              </div>
              <div className="pill-row">
                <span className="pill-option">Strip symbols</span>
                <span className="pill-option">Compress spaces</span>
                <span className="pill-option">Safe prefixes</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  One macro standardizes all metric names in a single pass.
                </div>
              </div>
            </div>

            {/* After */}
            <div
              className={`card ${
                step >= 3 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">After</div>
                <span className="card-tag">Stable keys</span>
              </div>
              <div className="metric-row">
                {after.map((a, idx) => (
                  <span
                    key={`${a}-${idx}`}
                    className="metric-chip"
                  >
                    <strong>{a}</strong>
                  </span>
                ))}
              </div>
              <div className="caption">
                Now “Revenue” and “NetIncome” mean the same thing everywhere.
              </div>
            </div>

            {/* Impact */}
            <div
              className={`card ${
                step >= 4 ? 'layer-fade' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Impact</div>
                <span className="card-tag-neutral">Reliability</span>
              </div>
              <div className="pill-stat-row">
                <span className="pill-stat pill-stat-positive">
                  Ratios use correct numerators
                </span>
                <span className="pill-stat pill-stat-positive">
                  Growth compares like with like
                </span>
              </div>
              <div className="caption">
                This is what makes every later slide trustworthy.
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 4 – Ratio engine
  {
    id: 4,
    maxStep: 4,
    render(step) {
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              RATIOS
            </div>
            <div className="slide-progress-pill">4 · Signal engine</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">Turning statements into signals</div>
            <div className="slide-subtitle">
              Profitability, liquidity, leverage, and efficiency
              drive the Health Score.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? 'layer-rise card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Profitability</div>
                <span className="card-tag">Earning power</span>
              </div>
              <div className="metric-row">
                <span className="metric-chip">Net margin</span>
                <span className="metric-chip">Gross margin</span>
                <span className="metric-chip">ROE</span>
                <span className="metric-chip">ROA</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  How efficiently NVIDIA turns revenue and assets into profit.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-swipe' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Liquidity</div>
                <span className="card-tag-neutral">Safety</span>
              </div>
              <div className="metric-row">
                <span className="metric-chip">Current ratio</span>
                <span className="metric-chip">Quick ratio</span>
                <span className="metric-chip">Cash ratio</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Measures NVIDIA’s ability to handle short-term bills.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Leverage</div>
                <span className="card-tag">Risk</span>
              </div>
              <div className="metric-row">
                <span className="metric-chip">Debt / Equity</span>
                <span className="metric-chip">Debt / Assets</span>
                <span className="metric-chip">Equity multiplier</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Shows how much debt supports NVIDIA’s capital structure.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 4 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Efficiency</div>
                <span className="card-tag-neutral">Usage</span>
              </div>
              <div className="metric-row">
                <span className="metric-chip">Asset turnover</span>
                <span className="metric-chip">Inventory turnover</span>
                <span className="metric-chip">Receivables turnover</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Connects NVIDIA’s resources to real output and cash.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 5 – F-score style logic and Health Score
  {
    id: 5,
    maxStep: 4,
    render(step) {
      const checks = [
        'Net income &gt; 0',
        'Op cash flow &gt; 0',
        'ROA improving',
        'OCF &gt; Net income',
        'Long-term debt falling',
        'Current ratio improving',
      ];
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              SCORING
            </div>
            <div className="slide-progress-pill">5 · Health model</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">Rule-based strength check</div>
            <div className="slide-subtitle">
              Multiple small tests combine into one Health Score and grade.
            </div>
          </div>

          <div className="slide-grid">
            {/* Rule checks */}
            <div
              className={`card ${
                step >= 1 ? 'layer-rise' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Checks</div>
                <span className="card-tag-neutral">Binary</span>
              </div>
              <div className="fscore-list">
                {checks.map((c, idx) => (
                  <div
                    key={c}
                    className={`pill-stat ${
                      step >= 2 && idx < 6
                        ? 'pill-stat-positive'
                        : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: c }}
                  />
                ))}
              </div>
              <div className="caption">
                The engine rewards profitability, cash, and balance sheet discipline.
              </div>
            </div>

            {/* Health gauge */}
            <div
              className={`card ${
                step >= 2 ? 'layer-swipe card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Health Score</div>
                <span className="card-tag">Weighted</span>
              </div>
              <div className="chart-shell">
                <div className="health-gauge">
                  <div className="health-track">
                    <div
                      className={`health-fill ${
                        step >= 3 ? 'health-fill-anim' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`health-grade ${
                      step >= 4 ? 'layer-fade' : 'hidden'
                    }`}
                  >
                    Strong&nbsp;Buy
                  </div>
                </div>
              </div>
              <div className="caption">
                High score means strong margins, low debt, and reliable cash flow.
              </div>
            </div>

            {/* Cash vs profit visual */}
            <div
              className={`card ${
                step >= 3 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Cash vs Profit</div>
                <span className="card-tag-neutral">Quality</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Operating cash flow consistently stays above reported net income.
                </div>
              </div>
            </div>

            {/* Timeline impact */}
            <div
              className={`card ${
                step >= 4 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">2018 → 2024</div>
                <span className="card-tag">History</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  The score holds up across multiple years, not just a single spike.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 6 – Historical trends dashboard
  {
    id: 6,
    maxStep: 3,
    render(step) {
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              HISTORY
            </div>
            <div className="slide-progress-pill">6 · 2018–2024</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">What NVIDIA actually did</div>
            <div className="slide-subtitle">
              Revenue, profit, margins, and financial health through the AI ramp.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? 'layer-rise card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Revenue vs Net Income</div>
                <span className="card-tag">Lines</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Both curves rise, with net income outpacing revenue growth.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 1 ? 'layer-swipe' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Margins</div>
                <span className="card-tag-neutral">Gross &amp; Net</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Margin expansion shows NVIDIA extracting more profit per dollar.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Health Score</div>
                <span className="card-tag">Composite</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  The score stays in “strong” territory across the period.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Leverage &amp; Liquidity</div>
                <span className="card-tag-neutral">Support</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Debt stays controlled while current, quick, and cash ratios remain healthy.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 7 – Balance sheet & cash
  {
    id: 7,
    maxStep: 3,
    render(step) {
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              BALANCE SHEET
            </div>
            <div className="slide-progress-pill">7 · Structure & cash</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">What backs the growth</div>
            <div className="slide-subtitle">
              Assets, liabilities, equity, working capital, and cash flow.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? 'layer-rise card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Assets vs Liabilities vs Equity</div>
                <span className="card-tag">Stacked</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Equity builds as assets grow faster than liabilities.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 1 ? 'layer-swipe' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Debt Structure</div>
                <span className="card-tag-neutral">Long vs Short</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Total debt remains manageable relative to NVIDIA’s size.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Working Capital</div>
                <span className="card-tag">Current</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Current assets comfortably exceed current liabilities.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Cash &amp; Op Cash Flow</div>
                <span className="card-tag-neutral">Fuel</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Cash generation keeps pace with NVIDIA’s rapid expansion.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 8 – Projection engine
  {
    id: 8,
    maxStep: 4,
    render(step) {
      const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2030];
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              PROJECTIONS
            </div>
            <div className="slide-progress-pill">8 · Engine logic</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">How 2024 → 2030 is generated</div>
            <div className="slide-subtitle">
              Average growth, margins, and ROE feed into a decaying-growth loop.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? 'layer-rise card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Inputs</div>
                <span className="card-tag-neutral">From history</span>
              </div>
              <div className="metric-row">
                <span className="metric-chip">Avg revenue growth</span>
                <span className="metric-chip">Avg EPS growth</span>
                <span className="metric-chip">Avg margin</span>
                <span className="metric-chip">Avg ROE</span>
              </div>
              <div className="caption">
                All taken from 2020–2024 data, not guessed.
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-swipe' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Engine</div>
                <span className="card-tag">Decaying growth</span>
              </div>
              <div className="heatmap-strip">
                {years.map((y, i) => (
                  <div
                    key={y}
                    className={`heat-cell ${
                      i >= 6 && step >= 3 ? 'heat-cell-strong' : ''
                    }`}
                  />
                ))}
              </div>
              <div className="heat-label-row">
                <span>History</span>
                <span>→</span>
                <span>2030</span>
              </div>
              <div className="caption">
                Growth cools slightly each year instead of staying unrealistically high.
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Outputs</div>
                <span className="card-tag-neutral">For each year</span>
              </div>
              <div className="metric-row">
                <span className="metric-chip">Revenue</span>
                <span className="metric-chip">Net income</span>
                <span className="metric-chip">Ratios</span>
                <span className="metric-chip">Health Score</span>
              </div>
              <div className="caption">
                Every projected year has a full synthetic income and balance sheet.
              </div>
            </div>

            <div
              className={`card ${
                step >= 4 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Usage</div>
                <span className="card-tag">Valuation</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  These projected cash flows feed directly into the valuation slide.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 9 – Projection dashboard
  {
    id: 9,
    maxStep: 3,
    render(step) {
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              FUTURE VIEW
            </div>
            <div className="slide-progress-pill">9 · 2024 → 2030</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">Projected NVIDIA path</div>
            <div className="slide-subtitle">
              Revenue, net income, health, and leverage under conservative growth.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? 'layer-rise card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Revenue &amp; Net income</div>
                <span className="card-tag">History + Proj</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Both curves continue rising through 2030 with slowing, not crashing, growth.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 1 ? 'layer-swipe' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Health Score</div>
                <span className="card-tag-neutral">Trajectory</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Score remains high, reflecting stable margins and low leverage.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Leverage &amp; Liquidity</div>
                <span className="card-tag">Guard rails</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Debt stays controlled while current ratios remain healthy.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Takeaway</div>
                <span className="card-tag-neutral">Conservative</span>
              </div>
              <div className="caption">
                Even with cooled growth, the model shows NVIDIA as financially strong.
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 10 – Valuation
  {
    id: 10,
    maxStep: 4,
    render(step) {
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              VALUATION
            </div>
            <div className="slide-progress-pill">10 · Intrinsic view</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">Intrinsic vs market price</div>
            <div className="slide-subtitle">
              Discounted cash flow style logic built from the projected EPS stream.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? 'layer-rise card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Price curves</div>
                <span className="card-tag">2018–2030</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Intrinsic value runs as a smooth curve; simulated market price
                  wobbles around it.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-swipe' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Now vs 2030</div>
                <span className="card-tag-neutral">Bar view</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Side-by-side comparison of the model’s estimate today vs 2030.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Gap</div>
                <span className="card-tag">Undervaluation</span>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Where intrinsic &gt; market, the model reads that as upside.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 4 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Model Grade</div>
                <span className="card-tag">Strong Buy</span>
              </div>
              <div className="caption">
                Final call: based on this engine, NVIDIA looks like a Strong Buy.
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 11 – Risks / caveats
  {
    id: 11,
    maxStep: 3,
    render(step) {
      const risks = [
        ['Model', 'Growth, margins, decay curve.'],
        ['Data', 'Mappings, missing values, outliers.'],
        ['Market', 'Macro, regulation, competition.'],
      ];
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              RISK
            </div>
            <div className="slide-progress-pill">11 · Where it can fail</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">Limits of the engine</div>
            <div className="slide-subtitle">
              Any model is only as good as its assumptions, data, and context.
            </div>
          </div>

          <div className="slide-grid">
            {risks.map(([title, desc], idx) => (
              <div
                key={title}
                className={`card ${
                  step >= idx + 1 ? 'layer-rise' : 'hidden'
                }`}
              >
                <div className="card-header">
                  <div className="card-title">{title} risk</div>
                  <span className="card-tag-neutral">Check</span>
                </div>
                <div className="caption">{desc}</div>
                <div className="heatmap-strip">
                  <div className="heat-cell heat-cell-risk" />
                </div>
              </div>
            ))}
            <div
              className={`card ${
                step >= 3 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Mindset</div>
                <span className="card-tag-neutral">Use it, don&apos;t worship it</span>
              </div>
              <div className="caption">
                The goal is not a perfect crystal ball, but a structured way
                to think about NVIDIA&apos;s numbers.
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 12 – Interactive choice: Pass / Wait / Buy
  {
    id: 12,
    maxStep: 2,
    render(step) {
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              DECISION
            </div>
            <div className="slide-progress-pill">12 · Your move</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">If this were your capital…</div>
            <div className="slide-subtitle">
              Same data, same engine, different risk preferences.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? 'layer-rise card-emphasis' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Highlights</div>
                <span className="card-tag-neutral">Model view</span>
              </div>
              <div className="pill-row">
                <span className="pill-option">Strong margins</span>
                <span className="pill-option">Low leverage</span>
                <span className="pill-option">Cash &gt; profit</span>
                <span className="pill-option">High Health Score</span>
              </div>
              <div className="caption">
                The engine is clearly leaning toward &quot;yes&quot;.
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-swipe' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Choice bar</div>
                <span className="card-tag">Live question</span>
              </div>
              <div className="pill-row">
                <span className="pill-option">Pass</span>
                <span className="pill-option">Wait &amp; see</span>
                <span className="pill-option pill-stat-positive">
                  Buy
                </span>
              </div>
              <div className="caption">
                Same numbers. Which option would you pick and why?
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-swipe-right' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Discussion</div>
                <span className="card-tag-neutral">Engage</span>
              </div>
              <div className="caption">
                This is where the class can argue: do we trust the model,
                or do we worry about macro, AI cycles, or something else?
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? 'layer-float' : 'hidden'
              }`}
            >
              <div className="card-header">
                <div className="card-title">Reality check</div>
                <span className="card-tag-neutral">No right answer</span>
              </div>
              <div className="caption">
                The point of the project is the engine and reasoning,
                not a perfect call on the stock.
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 13 – Q&A / recap
  {
    id: 13,
    maxStep: 1,
    render(step) {
      return (
        <div className="slide-content">
          <div className="slide-topbar">
            <div className="slide-label">
              <span className="slide-label-dot" />
              WRAP-UP
            </div>
            <div className="slide-progress-pill">13 · Q &amp; A</div>
          </div>

          <div className="slide-headline-row">
            <div className="slide-title-main">Engine, signals, forecasts, value</div>
            <div className="slide-subtitle">
              Clean data → ratios → Health Score → projections → valuation → decision.
            </div>
          </div>

          <div className="qa-center">
            <div
              className={`qa-badge ${
                step >= 1 ? 'breathe' : 'hidden'
              }`}
            >
              <div className="qa-title">Questions?</div>
              <div className="qa-sub">
                Data cleaning · ratio design · projection logic · valuation.
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
];
