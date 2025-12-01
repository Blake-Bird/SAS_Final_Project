// slides_nvda.jsx
import React from 'react';

export const slides = [
  // SLIDE 1 – Cold open: engine overview
  {
    id: 1,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide nvda-hero">
          <div className="nvda-label-strip">
            <span className="nvda-tag">NVDA Engine</span>
            <span className="nvda-tag subtle">STS 2920 · SAS Project</span>
          </div>

          <div className="hero-layout">
            {/* Left: flowing data stream */}
            <div className="hero-stream">
              <div
                className={`stream-funnel ${
                  step >= 1 ? 'anim-funnel-in' : 'hidden'
                }`}
              >
                <div className="stream-label">Raw CSVs</div>
                <div className="stream-columns">
                  <div className="stream-col col-pl">PL</div>
                  <div className="stream-col col-bs">BS</div>
                  <div className="stream-col col-cf">CF</div>
                  <div className="stream-col col-der">DRV</div>
                </div>
                <div className="stream-arrow" />
                <div className="stream-output">Clean NVDA dataset</div>
              </div>
            </div>

            {/* Right: mini dashboard */}
            <div className="hero-dashboard">
              <div
                className={`hero-title ${
                  step >= 1 ? 'anim-title-drop' : 'hidden'
                }`}
              >
                From raw vendor files
                <span className="hero-highlight">→</span>
                trading-grade NVDA view
              </div>

              <div className="hero-panels">
                <div
                  className={`hero-panel ${
                    step >= 2 ? 'anim-panel-rise' : 'hidden'
                  }`}
                >
                  <div className="panel-caption">Revenue vs Net Income</div>
                  <div className="mini-chart mini-line" />
                </div>
                <div
                  className={`hero-panel ${
                    step >= 2 ? 'anim-panel-rise-delayed' : 'hidden'
                  }`}
                >
                  <div className="panel-caption">Health Score</div>
                  <div className="mini-chart mini-curve" />
                </div>
                <div
                  className={`hero-panel ${
                    step >= 3 ? 'anim-panel-rise-delayed2' : 'hidden'
                  }`}
                >
                  <div className="panel-caption">Debt / Equity</div>
                  <div className="mini-chart mini-line-alt" />
                </div>
                <div
                  className={`hero-panel ${
                    step >= 3 ? 'anim-panel-rise-delayed3' : 'hidden'
                  }`}
                >
                  <div className="panel-caption">Intrinsic vs Market</div>
                  <div className="mini-chart mini-band" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 2 – Pipeline
  {
    id: 2,
    maxStep: 5,
    render(step) {
      const stages = [
        ['Raw CSVs', 'PL / BS / CF / DRV'],
        ['Unified Table', 'One NVDA dataset'],
        ['Ratio Engine', 'Signals from statements'],
        ['Projection Core', '2025–2030 loop'],
        ['Outputs', 'Graphs & grades'],
      ];
      return (
        <div className="nvda-slide nvda-pipeline">
          <div className="nvda-label-strip">
            <span className="nvda-tag">Dataflow</span>
          </div>

          <div
            className={`pipeline-track ${
              step >= 1 ? 'anim-pipeline-enter' : 'hidden'
            }`}
          >
            {stages.map(([title, desc], idx) => (
              <div
                key={title}
                className={`pipeline-node ${
                  step >= idx + 2 ? 'node-active' : ''
                }`}
              >
                <div className="node-inner">
                  <div className="node-title">{title}</div>
                  <div className="node-desc">{desc}</div>
                </div>
                {idx < stages.length - 1 && (
                  <div className="node-arrow">
                    <span className="node-arrow-body" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  // SLIDE 3 – Metric cleaning
  {
    id: 3,
    maxStep: 4,
    render(step) {
      const raw = [
        'Total Revenue',
        'Sales & Services Revenue',
        'TotalRevenue',
        'Net Income (Loss)',
      ];
      const clean = ['Revenue', 'Revenue', 'Revenue', 'NetIncome'];
      return (
        <div className="nvda-slide nvda-cleaning">
          <div className="nvda-label-strip">
            <span className="nvda-tag">Vendor Cleanup</span>
          </div>

          <div className="clean-layout">
            <div
              className={`clean-card clean-card-left ${
                step >= 1 ? 'anim-panel-rise' : 'hidden'
              }`}
            >
              <div className="clean-title">Before</div>
              <div className="clean-list">
                {raw.map((name) => (
                  <div key={name} className="clean-item raw-item">
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="clean-transform">
              <div
                className={`transform-core ${
                  step >= 2 ? 'anim-transform-spin' : 'hidden'
                }`}
              >
                <span>Normalize</span>
              </div>
            </div>

            <div
              className={`clean-card clean-card-right ${
                step >= 2 ? 'anim-panel-rise-delayed' : 'hidden'
              }`}
            >
              <div className="clean-title">After</div>
              <div className="clean-list">
                {clean.map((name, idx) => (
                  <div
                    key={`${name}-${idx}`}
                    className={`clean-item clean-item-mapped ${
                      step >= 3 ? 'anim-clean-highlight' : ''
                    }`}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`clean-summary ${
              step >= 4 ? 'anim-summary-fade' : 'hidden'
            }`}
          >
            40+ vendor labels collapse into a single, consistent NVDA schema.
          </div>
        </div>
      );
    },
  },

  // SLIDE 4 – Ratio engine wheel
  {
    id: 4,
    maxStep: 4,
    render(step) {
      const quadrants = [
        ['Profitability', 'NetMargin · GrossMargin · ROE · ROA'],
        ['Liquidity', 'Current · Quick · Cash ratios'],
        ['Leverage', 'Debt/Equity · Equity Multiplier'],
        ['Efficiency', 'Asset · Inv · Rec Turnover'],
      ];
      return (
        <div className="nvda-slide nvda-wheel">
          <div className="nvda-label-strip">
            <span className="nvda-tag">Signal Engine</span>
          </div>

          <div className="wheel-layout">
            <div
              className={`signal-wheel ${
                step >= 1 ? 'anim-wheel-enter' : 'hidden'
              }`}
            >
              {quadrants.map(([title, desc], idx) => (
                <div
                  key={title}
                  className={`wheel-sector wheel-sector-${idx + 1} ${
                    step >= idx + 2 ? 'sector-active' : ''
                  }`}
                >
                  <div className="sector-title">{title}</div>
                  <div className="sector-desc">{desc}</div>
                </div>
              ))}
              <div className="wheel-center">NVDA</div>
            </div>

            <div
              className={`wheel-gauges ${
                step >= 3 ? 'anim-gauges-rise' : 'hidden'
              }`}
            >
              <div className="gauge">
                <div className="gauge-label">2024 Health</div>
                <div className="gauge-bar">
                  <div className="gauge-fill gauge-fill-strong" />
                </div>
              </div>
              <div className="gauge">
                <div className="gauge-label">F-Score Style</div>
                <div className="gauge-dots">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span
                      key={i}
                      className={`gauge-dot ${
                        step >= 4 && i < 7 ? 'dot-on' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 5 – F-score & HealthScore detail
  {
    id: 5,
    maxStep: 4,
    render(step) {
      const checks = [
        'Net income > 0',
        'Op cash flow > 0',
        'ROA improving',
        'OCF > Net income',
        'Long-term debt falling',
        'Current ratio improving',
      ];
      return (
        <div className="nvda-slide nvda-fscore">
          <div className="nvda-label-strip">
            <span className="nvda-tag">Scoring</span>
          </div>

          <div className="fscore-layout">
            <div
              className={`fscore-left ${
                step >= 1 ? 'anim-panel-rise' : 'hidden'
              }`}
            >
              <div className="fscore-title">Rule-Based Strength</div>
              <div className="fscore-list">
                {checks.map((txt, idx) => (
                  <div
                    key={txt}
                    className={`fscore-row ${
                      step >= 2 && idx < 6 ? 'fscore-row-on' : ''
                    }`}
                  >
                    <span className="fscore-check" />
                    <span className="fscore-text">{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`fscore-right ${
                step >= 2 ? 'anim-panel-rise-delayed' : 'hidden'
              }`}
            >
              <div className="fscore-title">Health Score</div>
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
                    step >= 4 ? 'anim-grade-pop' : 'hidden'
                  }`}
                >
                  Strong&nbsp;Buy
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 6 – Historical dashboard 1
  {
    id: 6,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide nvda-dash">
          <div className="nvda-label-strip">
            <span className="nvda-tag">2018–2024 Snapshot</span>
          </div>

          <div className="dash-grid">
            <div
              className={`dash-card ${
                step >= 1 ? 'anim-card-in' : 'hidden'
              }`}
            >
              <div className="dash-caption">Revenue vs Net Income</div>
              <div className="dash-chart dash-line" />
            </div>
            <div
              className={`dash-card ${
                step >= 1 ? 'anim-card-in-delayed' : 'hidden'
              }`}
            >
              <div className="dash-caption">Gross & Net Margins</div>
              <div className="dash-chart dash-double-line" />
            </div>
            <div
              className={`dash-card ${
                step >= 2 ? 'anim-card-in' : 'hidden'
              }`}
            >
              <div className="dash-caption">Health Score</div>
              <div className="dash-chart dash-health" />
            </div>
            <div
              className={`dash-card ${
                step >= 3 ? 'anim-card-in-delayed' : 'hidden'
              }`}
            >
              <div className="dash-caption">Debt / Equity & Liquidity</div>
              <div className="dash-chart dash-leverage" />
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 7 – Balance sheet / risk dashboard
  {
    id: 7,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide nvda-dash nvda-dash-risk">
          <div className="nvda-label-strip">
            <span className="nvda-tag">Balance Sheet & Risk</span>
          </div>

          <div className="dash-grid">
            <div
              className={`dash-card ${
                step >= 1 ? 'anim-card-in' : 'hidden'
              }`}
            >
              <div className="dash-caption">Assets vs Liabilities vs Equity</div>
              <div className="dash-chart dash-stacked" />
            </div>
            <div
              className={`dash-card ${
                step >= 1 ? 'anim-card-in-delayed' : 'hidden'
              }`}
            >
              <div className="dash-caption">Debt Structure</div>
              <div className="dash-chart dash-debt" />
            </div>
            <div
              className={`dash-card ${
                step >= 2 ? 'anim-card-in' : 'hidden'
              }`}
            >
              <div className="dash-caption">Working Capital</div>
              <div className="dash-chart dash-working" />
            </div>
            <div
              className={`dash-card ${
                step >= 3 ? 'anim-card-in-delayed' : 'hidden'
              }`}
            >
              <div className="dash-caption">Cash & Op Cash Flow</div>
              <div className="dash-chart dash-cashflow" />
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 8 – Projection logic (time machine)
  {
    id: 8,
    maxStep: 4,
    render(step) {
      const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030];
      return (
        <div className="nvda-slide nvda-time-machine">
          <div className="nvda-label-strip">
            <span className="nvda-tag">Projection Engine</span>
          </div>

          <div className="time-layout">
            <div
              className={`time-inputs ${
                step >= 1 ? 'anim-panel-rise' : 'hidden'
              }`}
            >
              <div className="time-chip">Avg Rev growth</div>
              <div className="time-chip">Avg EPS growth</div>
              <div className="time-chip">Avg margin</div>
              <div className="time-chip">Avg ROE</div>
            </div>

            <div
              className={`time-strip ${
                step >= 2 ? 'anim-time-strip' : 'hidden'
              }`}
            >
              {years.map((year, idx) => (
                <div
                  key={year}
                  className={`time-node ${
                    idx === 0 ? 'time-node-base' : ''
                  } ${step >= 3 && idx > 0 ? 'time-node-projected' : ''}`}
                >
                  <div className="time-node-year">{year}</div>
                </div>
              ))}
              <div
                className={`time-glow ${
                  step >= 3 ? 'time-glow-anim' : 'hidden'
                }`}
              />
            </div>

            <div
              className={`time-sparks ${
                step >= 4 ? 'anim-sparks' : 'hidden'
              }`}
            >
              <div className="spark-row">
                <span>Revenue</span>
                <div className="spark spark-rev" />
              </div>
              <div className="spark-row">
                <span>Net income</span>
                <div className="spark spark-ni" />
              </div>
              <div className="spark-row">
                <span>Health score</span>
                <div className="spark spark-health" />
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
        <div className="nvda-slide nvda-dash nvda-dash-proj">
          <div className="nvda-label-strip">
            <span className="nvda-tag">2024 → 2030 View</span>
          </div>

          <div className="dash-top">
            <div
              className={`dash-card wide ${
                step >= 1 ? 'anim-card-in' : 'hidden'
              }`}
            >
              <div className="dash-caption">
                Revenue & Net Income (history + projections)
              </div>
              <div className="dash-chart dash-line-proj" />
            </div>
          </div>

          <div className="dash-bottom">
            <div
              className={`dash-card ${
                step >= 2 ? 'anim-card-in' : 'hidden'
              }`}
            >
              <div className="dash-caption">Health Score Projection</div>
              <div className="dash-chart dash-health-proj" />
            </div>
            <div
              className={`dash-card ${
                step >= 3 ? 'anim-card-in-delayed' : 'hidden'
              }`}
            >
              <div className="dash-caption">Leverage & Liquidity</div>
              <div className="dash-chart dash-leverage-proj" />
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 10 – Valuation view
  {
    id: 10,
    maxStep: 4,
    render(step) {
      return (
        <div className="nvda-slide nvda-valuation">
          <div className="nvda-label-strip">
            <span className="nvda-tag">Valuation</span>
          </div>

          <div className="valuation-layout">
            <div
              className={`valuation-chart ${
                step >= 1 ? 'anim-card-in' : 'hidden'
              }`}
            >
              <div className="dash-caption">
                Intrinsic vs Market Price (2018–2030)
              </div>
              <div className="dash-chart dash-valuation" />
            </div>

            <div
              className={`valuation-side ${
                step >= 2 ? 'anim-panel-rise-delayed' : 'hidden'
              }`}
            >
              <div className="valuation-bars">
                <div className="val-bar-row">
                  <span className="val-label">Now</span>
                  <div className="val-bar-track">
                    <div
                      className={`val-bar val-bar-now ${
                        step >= 3 ? 'val-bar-now-anim' : ''
                      }`}
                    />
                  </div>
                </div>
                <div className="val-bar-row">
                  <span className="val-label">2030</span>
                  <div className="val-bar-track">
                    <div
                      className={`val-bar val-bar-future ${
                        step >= 4 ? 'val-bar-future-anim' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="valuation-grade">
                <span className="grade-pill">Model grade: Strong Buy</span>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 11 – Risk & caveats
  {
    id: 11,
    maxStep: 3,
    render(step) {
      const risks = [
        ['Model Risk', 'Growth, margins, decay logic.'],
        ['Data Risk', 'Vendor mappings, missing values.'],
        ['Market Risk', 'Regimes, regulation, competition.'],
      ];
      return (
        <div className="nvda-slide nvda-risk">
          <div className="nvda-label-strip">
            <span className="nvda-tag">Where It Can Be Wrong</span>
          </div>

          <div className="risk-backdrop" />
          <div className="risk-row">
            {risks.map(([title, desc], idx) => (
              <div
                key={title}
                className={`risk-card ${
                  step >= idx + 1 ? 'anim-card-in' : 'hidden'
                }`}
              >
                <div className="risk-icon" />
                <div className="risk-title">{title}</div>
                <div className="risk-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  // SLIDE 12 – Interactive choice
  {
    id: 12,
    maxStep: 2,
    render(step) {
      return (
        <div className="nvda-slide nvda-choice">
          <div className="nvda-label-strip">
            <span className="nvda-tag">If This Were Your Money...</span>
          </div>

          <div className="choice-layout">
            <div
              className={`choice-thumbs ${
                step >= 1 ? 'anim-panel-rise' : 'hidden'
              }`}
            >
              <div className="thumb-card">
                <div className="thumb-caption">Health Score</div>
                <div className="thumb-chart thumb-health" />
              </div>
              <div className="thumb-card">
                <div className="thumb-caption">Debt / Equity</div>
                <div className="thumb-chart thumb-leverage" />
              </div>
              <div className="thumb-card">
                <div className="thumb-caption">Intrinsic vs Market</div>
                <div className="thumb-chart thumb-val" />
              </div>
            </div>

            <div
              className={`choice-bar ${
                step >= 2 ? 'anim-choice-bar' : 'hidden'
              }`}
            >
              <div className="choice-option opt-pass">Pass</div>
              <div className="choice-option opt-wait">Wait &amp; See</div>
              <div className="choice-option opt-buy">Buy NVDA</div>
            </div>
          </div>
        </div>
      );
    },
  },

  // SLIDE 13 – Questions / recap
  {
    id: 13,
    maxStep: 1,
    render(step) {
      return (
        <div className="nvda-slide nvda-questions">
          <div className="questions-backdrop" />
          <div
            className={`questions-card ${
              step >= 1 ? 'anim-questions-float' : 'hidden'
            }`}
          >
            <div className="q-line">Data ingestion & cleaning.</div>
            <div className="q-line">Signal & score engineering.</div>
            <div className="q-line">Forecast & valuation.</div>
            <div className="q-sub">What part would you like to dig into?</div>
          </div>
        </div>
      );
    },
  },
];
