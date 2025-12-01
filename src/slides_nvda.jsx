// slides.jsx
import React from "react";

export const slides = [
  // 1. NVIDIA – hero splash, history + forecast hint
  {
    id: 1,
    maxStep: 4,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>NVDA</span>
            </div>
            <div className="nvda-chip">2018–2030</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">NVIDIA</div>
          </div>

          <div className="nvda-row">
            {/* Left: glowing NVDA orb */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal emphasis" : "hidden"
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas">
                    <div className="world-layer history anim-world-history" />
                    {step >= 3 && (
                      <div className="world-layer forecast anim-world-forecast" />
                    )}

                    {/* Graph line – 1.1 draw-in */}
                    <div className="graph-line">
                      <div
                        className={`graph-line-path ${
                          step >= 2 ? "anim-graph-draw" : ""
                        }`}
                      />
                      {/* Historical points */}
                      {[
                        { left: "6%", top: "70%" },
                        { left: "22%", top: "64%" },
                        { left: "38%", top: "56%" },
                        { left: "54%", top: "44%" },
                        { left: "70%", top: "36%" },
                      ].map((p, idx) => (
                        <div
                          key={idx}
                          className={`graph-point ${
                            step >= 2 + (idx > 0 ? 1 : 0) ? "visible" : ""
                          }`}
                          style={p}
                        />
                      ))}
                      {/* Forecast point */}
                      <div
                        className={`graph-point ${
                          step >= 4 ? "visible" : ""
                        }`}
                        style={{ left: "90%", top: "28%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: big 2030 number with halo */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="stat-number-sub">2030 Rev</div>
                <div className={`halo-wrap ${step >= 3 ? "anim-halo" : ""}`}>
                  <div className="halo-ring" />
                  <div
                    className={`stat-number ${
                      step >= 4 ? "stat-pulse" : ""
                    }`}
                  >
                    $XXXB
                  </div>
                </div>
                <div className="stat-number-sub">Model output</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 2. Context – simple segments, no paragraphs
  {
    id: 2,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Context</span>
            </div>
            <div className="nvda-chip">AI · GPUs</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Context</div>
          </div>

          <div className="nvda-row">
            {/* Left: simple “world of NVDA” blobs */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas scatter-layer">
                    {/* AI */}
                    <div
                      className={`scatter-dot ${
                        step >= 1 ? "anim-data-bloom" : ""
                      }`}
                      style={{ left: "32%", top: "30%" }}
                    />
                    {/* Gaming */}
                    <div
                      className={`scatter-dot ${
                        step >= 1 ? "anim-data-bloom" : ""
                      }`}
                      style={{ left: "68%", top: "42%" }}
                    />
                    {/* Data center */}
                    <div
                      className={`scatter-dot ${
                        step >= 2 ? "anim-data-bloom" : ""
                      }`}
                      style={{ left: "48%", top: "58%" }}
                    />
                    {/* Auto */}
                    <div
                      className={`scatter-dot ${
                        step >= 3 ? "anim-data-bloom" : ""
                      }`}
                      style={{ left: "26%", top: "60%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: tiny chips (still ≤2–3 words each) */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">AI</div>
                  <div className="interactive-pill">Gaming</div>
                  <div className="interactive-pill">Data</div>
                  <div className="interactive-pill">Auto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 3. Process – pipeline + timeline sweep
  {
    id: 3,
    maxStep: 4,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Flow</span>
            </div>
            <div className="nvda-chip">Process</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Process</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="timeline-strip">
                  {["Raw", "Clean", "Ratios", "Proj"].map((label, idx) => (
                    <div key={label} className="timeline-node">
                      <div
                        className={`timeline-dot ${
                          step >= idx + 2 ? "active" : ""
                        }`}
                      />
                      <div>{label}</div>
                    </div>
                  ))}
                  <div
                    className={`timeline-sweep ${
                      step >= 3 ? "anim-timeline-sweep" : ""
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">PL</div>
                  <div className="interactive-pill">BS</div>
                  <div className="interactive-pill">CF</div>
                  <div className="interactive-pill">DRV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 4. Inflection – hot bars around key years
  {
    id: 4,
    maxStep: 3,
    render(step) {
      const years = ["18", "19", "20", "21", "22", "23"];
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Turn</span>
            </div>
            <div className="nvda-chip">Inflection</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Inflection</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal emphasis" : "hidden"
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {years.map((y, idx) => {
                      const isHot = idx >= 2; // 2020–2023
                      const target =
                        idx === 2 ? "60%" : idx === 3 ? "80%" : idx === 4 ? "88%" : idx === 5 ? "92%" : "40%";
                      return (
                        <div key={y} className="bar-column">
                          <div className="bar-shell">
                            <div
                              className={`bar-fill ${
                                step >= 2
                                  ? isHot
                                    ? "hot"
                                    : "normal"
                                  : ""
                              }`}
                              style={{ "--bar-target": target }}
                            />
                          </div>
                          <div className="bar-year">{y}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="stat-number-sub">Shift</div>
                <div className={`stat-number ${step >= 3 ? "stat-pulse" : ""}`}>
                  AI Run
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 5. Revenue – line plus bars
  {
    id: 5,
    maxStep: 4,
    render(step) {
      const years = ["18", "19", "20", "21", "22", "23", "30"];
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Rev</span>
            </div>
            <div className="nvda-chip">Revenue</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Revenue</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas">
                    <div className="graph-line">
                      <div
                        className={`graph-line-path ${
                          step >= 2 ? "anim-graph-draw" : ""
                        }`}
                      />
                      {years.map((y, idx) => (
                        <div
                          key={y}
                          className={`graph-point ${
                            step >= 3 && idx <= 5
                              ? "visible"
                              : step >= 4 && idx === 6
                              ? "visible"
                              : ""
                          }`}
                          style={{
                            left: `${8 + idx * 13}%`,
                            top:
                              idx < 2
                                ? "68%"
                                : idx < 4
                                ? "56%"
                                : idx < 6
                                ? "42%"
                                : "30%",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="stat-number-sub">CAGR</div>
                <div
                  className={`stat-number ${
                    step >= 4 ? "stat-pulse" : ""
                  }`}
                >
                  XX%
                </div>
                <div className="stat-number-sub">2018–2030</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 6. Profit – NI + FCF
  {
    id: 6,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Profit</span>
            </div>
            <div className="nvda-chip">NI · FCF</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Profit</div>
          </div>

          <div className="nvda-row">
            {/* NI */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="stat-number-sub">NI</div>
                <div
                  className={`stat-number ${
                    step >= 2 ? "stat-pulse" : ""
                  }`}
                >
                  ↑
                </div>
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {[40, 44, 52, 68, 82, 90].map((h, idx) => (
                      <div key={idx} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className={`bar-fill normal ${
                              step >= 2 ? "" : ""
                            }`}
                            style={{ "--bar-target": `${h}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FCF */}
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="stat-number-sub">FCF</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? "stat-pulse" : ""
                  }`}
                >
                  ↑
                </div>
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {[35, 42, 54, 70, 88, 95].map((h, idx) => (
                      <div key={idx} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className={`bar-fill normal`}
                            style={{ "--bar-target": `${h}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 7. Margins – heat-ish dual bars
  {
    id: 7,
    maxStep: 3,
    render(step) {
      const years = ["18", "19", "20", "21", "22", "23"];
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Margin</span>
            </div>
            <div className="nvda-chip">Gross · Net</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Margins</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal emphasis" : "hidden"
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {years.map((y, idx) => (
                      <div key={y} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className={`bar-fill hot`}
                            style={{
                              "--bar-target": `${60 + idx * 4}%`,
                            }}
                          />
                        </div>
                        <div className="bar-year">{y}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="stat-number-sub">Resilience</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? "stat-pulse" : ""
                  }`}
                >
                  High
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 8. Assets – structure blocks
  {
    id: 8,
    maxStep: 2,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Assets</span>
            </div>
            <div className="nvda-chip">Structure</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Assets</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas">
                    <div className="world-layer history anim-world-history" />
                    {step >= 2 && (
                      <div className="world-layer forecast anim-world-forecast" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="stat-number-sub">Stack</div>
                <div className="stat-number">Strong</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 9. Debt – simple bar visual
  {
    id: 9,
    maxStep: 3,
    render(step) {
      const years = ["18", "19", "20", "21", "22", "23"];
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Debt</span>
            </div>
            <div className="nvda-chip">Leverage</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Debt</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal" : "hidden"
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {years.map((y, idx) => (
                      <div key={y} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className={`bar-fill normal`}
                            style={{
                              "--bar-target": `${40 - idx * 3}%`,
                            }}
                          />
                        </div>
                        <div className="bar-year">{y}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="stat-number-sub">Trend</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? "stat-pulse" : ""
                  }`}
                >
                  Down
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 10. Cash Flow – simple twin panels
  {
    id: 10,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Flow</span>
            </div>
            <div className="nvda-chip">Cash</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Cash Flow</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="stat-number-sub">Op</div>
                <div
                  className={`stat-number ${
                    step >= 2 ? "stat-pulse" : ""
                  }`}
                >
                  Strong
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="stat-number-sub">FCF</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? "stat-pulse" : ""
                  }`}
                >
                  Strong
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 11. Ratios – quick 3-block health view
  {
    id: 11,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Ratios</span>
            </div>
            <div className="nvda-chip">Health</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Ratios</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">ROE</div>
                  <div className="interactive-pill">ROA</div>
                  <div className="interactive-pill">CR</div>
                  <div className="interactive-pill">D/E</div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="stat-number-sub">Score</div>
                <div
                  className={`stat-number ${
                    step >= 3 ? "stat-pulse" : ""
                  }`}
                >
                  High
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 12. Mismatch – intrinsic vs price
  {
    id: 12,
    maxStep: 4,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Gap</span>
            </div>
            <div className="nvda-chip">Mismatch</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Mismatch</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas">
                    {/* Price vs value worlds */}
                    <div
                      className={`world-layer history ${
                        step >= 1 ? "anim-world-history" : ""
                      }`}
                    />
                    {step >= 3 && (
                      <div className="world-layer forecast anim-world-forecast" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">Price</div>
                  <div className="interactive-pill">Value</div>
                  <div className="interactive-pill">Story</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 13. 2030 – projected endpoint with halo
  {
    id: 13,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>2030</span>
            </div>
            <div className="nvda-chip">End Point</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">2030</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal emphasis" : "hidden"
                }`}
              >
                <div className="stat-number-sub">Rev</div>
                <div
                  className={`halo-wrap ${step >= 2 ? "anim-halo" : ""}`}
                >
                  <div className="halo-ring" />
                  <div
                    className={`stat-number ${
                      step >= 3 ? "stat-pulse" : ""
                    }`}
                  >
                    $XXXB
                  </div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="stat-number-sub">Call</div>
                <div className="stat-number">View</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 14. Stress – risk boxes / heat
  {
    id: 14,
    maxStep: 3,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Stress</span>
            </div>
            <div className="nvda-chip">Risk</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Stress</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">Model</div>
                  <div className="interactive-pill">Data</div>
                  <div className="interactive-pill">Market</div>
                </div>
              </div>
            </div>

            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 2 ? "glass-reveal layer-rise-delayed" : "hidden"
                }`}
              >
                <div className="nvda-chart">
                  <div className="nvda-chart-canvas nvda-bar-chart">
                    {[60, 40, 35].map((h, idx) => (
                      <div key={idx} className="bar-column">
                        <div className="bar-shell">
                          <div
                            className="bar-fill hot"
                            style={{ "--bar-target": `${h}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 15. Use – how this is useful
  {
    id: 15,
    maxStep: 2,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Use</span>
            </div>
            <div className="nvda-chip">Apply</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Use</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">Invest</div>
                  <div className="interactive-pill">Report</div>
                  <div className="interactive-pill">Teach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 16. Limits – constraints
  {
    id: 16,
    maxStep: 2,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Limits</span>
            </div>
            <div className="nvda-chip">Guardrails</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Limits</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-rise" : "hidden"
                }`}
              >
                <div className="interactive-strip">
                  <div className="interactive-pill">Model</div>
                  <div className="interactive-pill">Data</div>
                  <div className="interactive-pill">Macro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },

  // 17. Q&A – clean final slide
  {
    id: 17,
    maxStep: 1,
    render(step) {
      return (
        <div className="nvda-slide">
          <div className="nvda-topbar">
            <div className="nvda-label">
              <span className="nvda-label-dot" />
              <span>Q&A</span>
            </div>
            <div className="nvda-chip">Discussion</div>
          </div>

          <div className="nvda-heading-row">
            <div className="nvda-heading">Q&A</div>
          </div>

          <div className="nvda-row">
            <div className="nvda-col">
              <div
                className={`glass-panel ${
                  step >= 1 ? "glass-reveal layer-float emphasis" : "hidden"
                }`}
              >
                <div className="stat-number">Questions</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
];
