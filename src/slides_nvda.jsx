// slides_nvda.jsx
import React from "react";

export const slides = [
  // SLIDE 1 – Engine overview
  {
    id: 1,
    maxStep: 3,
    render(step) {
      return (
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">
              NVDA engine from raw files to one dataset
            </div>
            <div className="slide-subtitle">
              PL, BS, CF and derived vendor exports collapse into a single,
              analysis-ready NVDA table.
            </div>
          </div>

          <div className="slide-grid">
            {/* Left: sources */}
            <div
              className={`card ${
                step >= 1 ? "layer-rise" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">Inputs</div>
                <div className="card-tag">4 vendor CSVs</div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  <strong>PL</strong> – income statement
                </span>
                <span className="metric-chip">
                  <strong>BS</strong> – balance sheet
                </span>
                <span className="metric-chip">
                  <strong>CF</strong> – cash flow
                </span>
                <span className="metric-chip">
                  <strong>DRV</strong> – ratios & extras
                </span>
              </div>
              <div className="caption">
                Each file arrives with its own naming conventions, missing
                values and overlapping metrics.
              </div>
            </div>

            {/* Right: unified dataset */}
            <div
              className={`card ${
                step >= 2 ? "layer-rise-delayed" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Output</div>
                <div className="card-tag card-tag-neutral">
                  One NVDA fundamentals table
                </div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  <strong>Years</strong> 2018–2030
                </span>
                <span className="metric-chip">
                  <strong>Type</strong> historical + projected
                </span>
                <span className="metric-chip">
                  <strong>Scope</strong> PL, BS, CF, ratios, scores
                </span>
              </div>
              <div className="big-number">1 dataset</div>
              <div className="big-number-sub">
                Everything the later graphs and grades use comes from this
                single structure.
              </div>
            </div>

            {/* Bottom: engagement card */}
            <div
              className={`card question-card ${
                step >= 3 ? "layer-float breathe" : "hidden"
              }`}
            >
              <div className="question-main">
                If one statement was wrong, which would break this engine first?
              </div>
              <div className="pill-row">
                <div className="pill-option">Income statement (PL)</div>
                <div className="pill-option">Balance sheet (BS)</div>
                <div className="pill-option">Cash flow (CF)</div>
              </div>
              <div className="caption">
                I’ll pause here in the live talk and let someone pick one before
                showing where the ratios actually lean.
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 2 – Data pipeline
  {
    id: 2,
    maxStep: 4,
    render(step) {
      const stages = [
        ["Raw CSVs", "Vendor PL / BS / CF / DRV exports"],
        ["Long Form", "Wide columns reshaped into one row per year"],
        ["Mapped NVDA", "Different labels merged into clean metrics"],
        ["Analysis Engine", "Ratios, growth, scores and grades"],
      ];

      return (
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">How the SAS pipeline flows</div>
            <div className="slide-subtitle">
              The code behaves less like a report and more like a small
              analytics engine with a strict dataflow.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? "layer-swipe" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">Pipeline</div>
                <div className="card-tag">End-to-end</div>
              </div>
              <div className="heatmap-strip">
                {stages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`heat-cell ${
                      step >= idx + 2 ? "heat-cell-strong" : ""
                    }`}
                  />
                ))}
              </div>
              <div className="heat-label-row">
                <span>Raw</span>
                <span>Reshape</span>
                <span>Map</span>
                <span>Model</span>
              </div>
              <div className="caption">
                The SAS steps are ordered so that each stage depends only on a
                cleaned, fully defined dataset from the previous step.
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-rise" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Key choices</div>
                <div className="card-tag card-tag-neutral">Design</div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  <strong>Macros</strong> reuse the import logic
                </span>
                <span className="metric-chip">
                  <strong>Lags</strong> for growth & F-score style checks
                </span>
                <span className="metric-chip">
                  <strong>Defaults</strong> for missing averages and ratios
                </span>
              </div>
              <div className="caption">
                Instead of hard-coding each file, the macro reads any similar
                NVDA CSV and pushes it through the same cleaning logic.
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? "layer-rise-delayed" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Result</div>
                <div className="card-tag">Reusable engine</div>
              </div>
              <div className="pill-stat-row">
                <div className="pill-stat pill-stat-positive">
                  Same code, new ticker → just swap filepaths.
                </div>
                <div className="pill-stat pill-stat-positive">
                  All graphs and tables plug into one dataset.
                </div>
              </div>
              <div className="caption">
                That is the main “coding” outcome: not a one-off report, but a
                pipeline we could aim at another stock.
              </div>
            </div>

            <div
              className={`card question-card ${
                step >= 4 ? "layer-float" : "hidden"
              }`}
            >
              <div className="question-main">
                Where would *you* put tests if this became production code?
              </div>
              <div className="pill-row">
                <div className="pill-option">After import</div>
                <div className="pill-option">After mapping</div>
                <div className="pill-option">Before projections</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 3 – Metric cleaning / mapping
  {
    id: 3,
    maxStep: 4,
    render(step) {
      const before = [
        "Total Revenue",
        "Sales & Services Revenue",
        "TotalRevenue",
        "Net Income (Loss)",
      ];
      const after = ["Revenue", "Revenue", "Revenue", "NetIncome"];

      return (
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">Collapsing vendor labels</div>
            <div className="slide-subtitle">
              Different spellings and formats all compress into a small, stable
              set of NVDA metric names.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? "layer-swipe" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Before</div>
                <div className="card-tag card-tag-neutral">Vendor labels</div>
              </div>
              <div className="metric-row">
                {before.map((label) => (
                  <span key={label} className="metric-chip">
                    {label}
                  </span>
                ))}
              </div>
              <div className="caption">
                The raw CSV headers mix spaces, punctuation, and different
                naming for the exact same underlying metric.
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-float" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">Transform</div>
                <div className="card-tag">Cleaning rules</div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  Remove symbols, spaces, punctuation.
                </span>
                <span className="metric-chip">
                  Force a safe SAS name for every metric.
                </span>
                <span className="metric-chip">
                  Cap length and handle non-alpha starts.
                </span>
              </div>
              <div className="caption">
                The SAS code turns messy headings into consistent,
                machine-friendly identifiers that still reflect the finance
                meaning.
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? "layer-swipe-right" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">After</div>
                <div className="card-tag">Mapped schema</div>
              </div>
              <div className="metric-row">
                {after.map((label, idx) => (
                  <span
                    key={`${label}-${idx}`}
                    className="metric-chip pill-stat-positive"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="caption">
                Over forty vendor variations map into a compact set like
                <span> Revenue</span>, <span>NetIncome</span>,{" "}
                <span>TotalAssets</span> and <span>FreeCashFlow</span>.
              </div>
            </div>

            <div
              className={`card ${
                step >= 4 ? "layer-fade" : "hidden"
              } question-card`}
            >
              <div className="question-main">
                Why does this mapping matter for graphs later?
              </div>
              <div className="caption">
                Every plot in the final report relies on these clean names. If
                the mapping fails, the engine silently loses entire signals.
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
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">Ratio engine: four views</div>
            <div className="slide-subtitle">
              Once the dataset is clean, the code layers on profitability,
              liquidity, leverage and efficiency in one pass.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? "layer-rise" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">Profitability</div>
                <div className="card-tag">Margins & returns</div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  <strong>NetMargin</strong>
                </span>
                <span className="metric-chip">
                  <strong>GrossMargin</strong>
                </span>
                <span className="metric-chip">
                  <strong>ROE</strong> = NetIncome / Equity
                </span>
                <span className="metric-chip">
                  <strong>ROA</strong> = NetIncome / Assets
                </span>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-rise-delayed" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Liquidity</div>
                <div className="card-tag card-tag-neutral">Short-term safety</div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  <strong>Current</strong> = CurrAssets / CurrLiab
                </span>
                <span className="metric-chip">
                  <strong>Quick</strong> = (Cash + Receivables) / CurrLiab
                </span>
                <span className="metric-chip">
                  <strong>Cash</strong> = Cash / CurrLiab
                </span>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? "layer-swipe" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Leverage</div>
                <div className="card-tag">Capital structure</div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  <strong>DebtToEquity</strong> = Debt / Equity
                </span>
                <span className="metric-chip">
                  <strong>EquityMultiplier</strong> = Assets / Equity
                </span>
              </div>
              <div className="caption">
                These metrics feed the “risk” and “health” read of how aggressive
                or conservative NVDA is.
              </div>
            </div>

            <div
              className={`card ${
                step >= 4 ? "layer-swipe-right" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Efficiency</div>
                <div className="card-tag">Turnover</div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  <strong>AssetTurnover</strong> = Revenue / Assets
                </span>
                <span className="metric-chip">
                  <strong>InvTurnover</strong> = CostOfRevenue / Inventory
                </span>
                <span className="metric-chip">
                  <strong>RecTurnover</strong> = Revenue / Receivables
                </span>
              </div>
              <div className="caption">
                Together, these ratios transform raw statements into signals the
                later graphs and scores actually care about.
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 5 – F-score style logic & HealthScore
  {
    id: 5,
    maxStep: 4,
    render(step) {
      const checks = [
        "Net income > 0",
        "Operating cash flow > 0",
        "ROA improves vs last year",
        "OCF > Net income",
        "Long-term debt falling",
        "Current ratio improving",
      ];

      return (
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">
              Turning ratios into a simple “grade”
            </div>
            <div className="slide-subtitle">
              The code uses a Piotroski-style checklist plus a custom
              HealthScore to compress many metrics into one recommendation.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? "layer-rise" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">Rule checks</div>
                <div className="card-tag">F-score style</div>
              </div>
              <div className="fscore-list">
                {checks.map((txt, idx) => (
                  <div
                    key={txt}
                    className={`pill-stat ${
                      step >= 2 && idx < 6
                        ? "pill-stat-positive"
                        : "pill-stat-row"
                    }`}
                  >
                    {txt}
                  </div>
                ))}
              </div>
              <div className="caption">
                Each satisfied rule increments an internal F_Score variable and
                pushes NVDA closer to a “strong” label.
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-float" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">HealthScore</div>
                <div className="card-tag card-tag-neutral">Composite</div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  Base score starts at <strong>50</strong>.
                </span>
                <span className="metric-chip">
                  High margin, strong growth, safe leverage add points.
                </span>
                <span className="metric-chip">
                  Score maps onto <strong>Strong Buy</strong>,{" "}
                  <strong>Buy</strong>, or <strong>Hold</strong>.
                </span>
              </div>
              <div className="big-number">80+</div>
              <div className="big-number-sub">
                In this run, NVDA lands in the “Strong Buy” band.
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? "layer-rise-delayed" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Why it matters</div>
                <div className="card-tag">Presentation</div>
              </div>
              <div className="caption">
                In the final SAS report, most plots are still metric-level. This
                combined score is what lets us talk to a non-technical person in
                one sentence.
              </div>
            </div>

            <div
              className={`card question-card ${
                step >= 4 ? "layer-fade" : "hidden"
              }`}
            >
              <div className="question-main">
                If you had to change one rule in the F-style logic, which would
                you relax first?
              </div>
              <div className="pill-row">
                <div className="pill-option">Debt trend</div>
                <div className="pill-option">Margin threshold</div>
                <div className="pill-option">Growth hurdle</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 6 – Historical dashboard
  {
    id: 6,
    maxStep: 3,
    render(step) {
      return (
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">
              2018–2024: revenue, margins and health
            </div>
            <div className="slide-subtitle">
              The SAS output graphs show how quickly NVDA scaled and whether
              profitability kept up.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? "layer-rise" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">Revenue vs net income</div>
                <div className="card-tag">Line chart</div>
              </div>
              <div className="chart-shell">
                <div className="caption">Steep revenue climb with even faster net income growth in recent years.</div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 1 ? "layer-rise-delayed" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Gross vs net margin</div>
                <div className="card-tag card-tag-neutral">Spread</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Gross margins stay high while net margin trends upward,
                  confirming operating leverage.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-swipe" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">HealthScore history</div>
                <div className="card-tag">Composite</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Score moves from solid to very strong as growth, margins, and
                  leverage all line up.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? "layer-swipe-right" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Debt & liquidity</div>
                <div className="card-tag card-tag-neutral">Risk</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Liquidity ratios remain comfortably above one while
                  Debt/Equity stays controlled.
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
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">
              Assets, liabilities and cash engine
            </div>
            <div className="slide-subtitle">
              Under the hood, the balance sheet and cash-flow graphs show how
              NVDA funds its growth.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? "layer-rise" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">Assets vs liabilities</div>
                <div className="card-tag">Stacked view</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Total assets and total liabilities both climb, but equity also
                  expands, keeping the structure balanced.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 1 ? "layer-rise-delayed" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Debt structure</div>
                <div className="card-tag card-tag-neutral">
                  Long vs total debt
                </div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Long-term debt stays manageable relative to assets and
                  equity, supporting the Strong Buy conclusion.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-swipe" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Working capital</div>
                <div className="card-tag">Current assets/liabilities</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Current ratio and quick ratio show that short-term obligations
                  are covered with room to spare.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? "layer-swipe-right" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Cash & operating CF</div>
                <div className="card-tag card-tag-neutral">Engine</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Operating cash flow tracks or beats net income, and free cash
                  flow stays positive.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 8 – Projection logic
  {
    id: 8,
    maxStep: 4,
    render(step) {
      const inputs = [
        "Average revenue growth",
        "Average EPS growth",
        "Average net margin",
        "Average ROE",
      ];

      return (
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">
              Projection engine: 2025–2030 loop
            </div>
            <div className="slide-subtitle">
              The SAS code uses historical averages with a decay factor, then
              rebuilds full PL, BS and CF for each future year.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? "layer-rise" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">Inputs from history</div>
                <div className="card-tag">2020–2024</div>
              </div>
              <div className="metric-row">
                {inputs.map((txt) => (
                  <span key={txt} className="metric-chip">
                    {txt}
                  </span>
                ))}
              </div>
              <div className="caption">
                These averages come from the cleaned dataset, not from any
                external assumption.
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-float" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Loop structure</div>
                <div className="card-tag card-tag-neutral">Six steps</div>
              </div>
              <div className="pill-stat-row">
                <div className="pill-stat">Start from 2024 actuals.</div>
                <div className="pill-stat">
                  Apply growth to revenue and EPS.
                </div>
                <div className="pill-stat">
                  Rebuild margins, costs, and operating income.
                </div>
                <div className="pill-stat">
                  Update assets, equity and debt with simple rules.
                </div>
                <div className="pill-stat">
                  Recalculate all ratios and scores.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? "layer-swipe" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Valuation inside loop</div>
                <div className="card-tag">Intrinsic vs market</div>
              </div>
              <div className="caption">
                Each future EPS point feeds into an intrinsic value and a noisy
                “MarketPrice” to simulate mispricing and a price gap.
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  Intrinsic value from EPS × multiple.
                </span>
                <span className="metric-chip">
                  Randomized market price ± small band.
                </span>
              </div>
            </div>

            <div
              className={`card question-card ${
                step >= 4 ? "layer-fade" : "hidden"
              }`}
            >
              <div className="question-main">
                What would you change first: the decay factor, the growth
                window, or the valuation multiple?
              </div>
              <div className="pill-row">
                <div className="pill-option">Decay factor</div>
                <div className="pill-option">Historical window</div>
                <div className="pill-option">Valuation multiple</div>
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
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">
              2024 → 2030: what the model sees
            </div>
            <div className="slide-subtitle">
              The SAS graphs combine history and projections on the same axes so
              we can judge if the forward path is realistic.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? "layer-rise" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">
                  Revenue & Net income (history + projected)
                </div>
                <div className="card-tag">Trajectory</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  The model continues NVDA’s steep climb but with slightly
                  decaying growth rates compared to the peak.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-rise-delayed" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">HealthScore projection</div>
                <div className="card-tag card-tag-neutral">Stability</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Score moves from strong to very strong as margins and returns
                  stay high while leverage remains reasonable.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? "layer-swipe-right" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Leverage & liquidity over time</div>
                <div className="card-tag">Risk band</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  In the projections, current ratio and Debt/Equity hover in a
                  comfortable range instead of exploding.
                </div>
              </div>
            </div>

            <div className="card hidden" />
          </div>
        </div>
      );
    },
  },

  // SLIDE 10 – Valuation lens
  {
    id: 10,
    maxStep: 4,
    render(step) {
      return (
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">
              Intrinsic vs market: where the gap shows up
            </div>
            <div className="slide-subtitle">
              The model creates an intrinsic value curve and a noisy market
              curve to visualize potential mispricing.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card ${
                step >= 1 ? "layer-rise" : "hidden"
              } card-emphasis`}
            >
              <div className="card-header">
                <div className="card-title">
                  Intrinsic vs simulated market price
                </div>
                <div className="card-tag">Line chart</div>
              </div>
              <div className="chart-shell">
                <div className="caption">
                  Intrinsic value is driven by EPS and a multiple. Market price
                  wiggles around it to mimic sentiment.
                </div>
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-float" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Today vs 2030</div>
                <div className="card-tag card-tag-neutral">Bars</div>
              </div>
              <div className="pill-stat-row">
                <div className="pill-stat pill-stat-positive">
                  Now: model suggests upside based on current EPS.
                </div>
                <div className="pill-stat pill-stat-positive">
                  2030: gap widens if growth plays out as modeled.
                </div>
              </div>
              <div className="caption">
                The SAS report summarizes this as part of the final “Strong Buy”
                grade.
              </div>
            </div>

            <div
              className={`card ${
                step >= 3 ? "layer-swipe" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">Model grade</div>
                <div className="card-tag">Strong Buy</div>
              </div>
              <div className="big-number">Strong Buy</div>
              <div className="big-number-sub">
                Not as investment advice, but as the project’s verdict given its
                rules and assumptions.
              </div>
            </div>

            <div
              className={`card question-card ${
                step >= 4 ? "layer-fade" : "hidden"
              }`}
            >
              <div className="question-main">
                Do you trust the grade more, the financial statements more, or
                the market price more?
              </div>
              <div className="pill-row">
                <div className="pill-option">Grade</div>
                <div className="pill-option">Statements</div>
                <div className="pill-option">Market</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 11 – Risks & caveats
  {
    id: 11,
    maxStep: 3,
    render(step) {
      const risks = [
        ["Model risk", "Growth, margin and decay assumptions may be too simple."],
        ["Data risk", "Vendor mappings and missing values can distort ratios."],
        ["Market risk", "Real regimes, regulation and competition are ignored."],
      ];

      return (
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">Where the engine can be wrong</div>
            <div className="slide-subtitle">
              The SAS code looks clean, but it still bakes in assumptions and
              simplifications at every stage.
            </div>
          </div>

          <div className="slide-grid">
            {risks.map(([title, desc], idx) => (
              <div
                key={title}
                className={`card ${
                  step >= idx + 1 ? "layer-rise" : "hidden"
                }`}
              >
                <div className="card-header">
                  <div className="card-title">{title}</div>
                  <div className="card-tag card-tag-neutral">Limitation</div>
                </div>
                <div className="caption">{desc}</div>
              </div>
            ))}
            <div className="card hidden" />
          </div>
        </div>
      );
    },
  },

  // SLIDE 12 – Interactive decision
  {
    id: 12,
    maxStep: 2,
    render(step) {
      return (
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">
              If this were your portfolio, what call would you make?
            </div>
            <div className="slide-subtitle">
              Same dataset, same engine, three totally different ways to react.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card question-card ${
                step >= 1 ? "layer-rise" : "hidden"
              } card-emphasis`}
            >
              <div className="question-main">
                Choose one and defend it against the model:
              </div>
              <div className="pill-row">
                <div className="pill-option">Pass</div>
                <div className="pill-option">Wait &amp; monitor</div>
                <div className="pill-option">Buy NVDA</div>
              </div>
              <div className="caption">
                During the presentation I’ll ask the class to vote, then compare
                their choice to what the engine says.
              </div>
            </div>

            <div
              className={`card ${
                step >= 2 ? "layer-fade" : "hidden"
              }`}
            >
              <div className="card-header">
                <div className="card-title">What the code actually gives us</div>
                <div className="card-tag card-tag-neutral">Not advice</div>
              </div>
              <div className="metric-row">
                <span className="metric-chip">
                  Clean dataset ready for future experiments.
                </span>
                <span className="metric-chip">
                  Reusable ratio and scoring framework.
                </span>
                <span className="metric-chip">
                  Projection and valuation scaffold to improve later.
                </span>
              </div>
              <div className="caption">
                The real outcome is the structure, not just this single Strong
                Buy label.
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
        <div className="slide-body">
          <div className="slide-headline-row">
            <div className="slide-title-main">Questions on the engine</div>
            <div className="slide-subtitle">
              Three layers you can poke holes in: ingestion, signal, or forecast.
            </div>
          </div>

          <div className="slide-grid">
            <div
              className={`card qa-center ${
                step >= 1 ? "layer-float breathe" : "hidden"
              } card-emphasis`}
            >
              <div className="qa-badge">
                <div className="qa-title">Where should we tune first?</div>
                <div className="qa-sub">
                  Data ingestion & cleaning · Ratio & score design · Projection
                  & valuation logic
                </div>
              </div>
            </div>

            <div className="card hidden" />
            <div className="card hidden" />
            <div className="card hidden" />
          </div>
        </div>
      );
    },
  },
];
